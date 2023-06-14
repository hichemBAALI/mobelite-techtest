import axios from 'axios'
import { BASE_URL } from './env'
import {
  showWarningMessage,
  showErrorMessage,
} from '../components/ShowMessage'
import { store } from '../state/store'
import { showNoInternetMessage } from '../components/ShowMessage/ShowMessage'
import { EndSplashLoading } from '../state/reducers/connection'

export const HTTP_STATUS_SUCCESS = 200
export const HTTP_STATUS_CREATED = 201
export const HTTP_STATUS_ACCEPTED = 202
export const HTTP_STATUS_BAD_REQUEST = 400
export const HTTP_STATUS_UNAUTHORIZED = 401
export const HTTP_STATUS_FORBIDDEN = 403
export const HTTP_STATUS_NOT_FOUND = 404
export const HTTP_STATUS_SERVER_ERROR = 500
export const HTTP_STATUS_PAYMENT_WAITING = 409

export interface HttpHeaderProps {
  Authorization: string
  deviceId: string
  lang: string
}

function errorHandler(errorResponse: any, isOnline: boolean): void {
  console.log({
    errorResponse,
  })
  const { status, data } = errorResponse
  const { type, errors } = data
  const errorMessages = errors
    ? errors
        .map((err: any) => `'${err.fieldName}': ${err.message}`)
        .join('\n')
    : data
  if (status !== HTTP_STATUS_UNAUTHORIZED && isOnline) {
    switch (type) {
      case 'validation_error':
        showWarningMessage({
          message: 'Error',
          description: errorMessages,
        })
        break
      case 'client_error':
        showErrorMessage({
          message: 'Error',
          description: `Oops! The request could not be completed. Please try again or reach out to us.`,
        })
        break
      case 'server_error':
        showErrorMessage({
          message: 'Error',
          description: `Oops! The request could not be completed. Please try again or reach out to us.`,
        })
        break

      default:
        showErrorMessage({
          message: 'Unexpected error',
          description: `Oops! The request could not be completed. Please try again`,
        })
        break
    }
  }
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
})

export const setAxiosHeader = async (header: HttpHeaderProps) => {
  try {
    axiosInstance.defaults.baseURL = BASE_URL
    axiosInstance.defaults.timeout = 10000
    axiosInstance.defaults.headers.common.key = header?.deviceId
    axiosInstance.defaults.headers.common.lang = header?.lang
    return await Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
export const setHttpAuthorization = async (access: string) => {
  try {
    //client?.resetStore()
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${access}`
    return await Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
let isShown: boolean
axiosInstance.interceptors.response.use(
  (correctResponse: any) => {
    console.log({
      correctResponse,
    })
    return correctResponse
  },
  async (error: any) => {
    const { response } = error
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const { isOnline } = store.getState()?.connection
    //error handler and Sentry message capture
    errorHandler(response, isOnline)
    // ************************ //
    if (!isOnline && !isShown) {
      showNoInternetMessage({
        onShow: () => {
          isShown = true
        },
        onHide: () => {
          isShown = false
        },
        message: 'No Network',
        description:
          "You're not connected to any network. Please select a network to continue",
      })
      return
    }
    const { config } = error
    const originalRequest = config
    if (
      error?.response?.status === HTTP_STATUS_UNAUTHORIZED &&
      !originalRequest._retry
    ) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      if (originalRequest.url !== API_POST_TOKEN_REFRESH) {
        originalRequest._retry = true
        // await store
        //   .dispatch(ReqRefreshAccountToken())
        //   .then((data: any) => {
        //     originalRequest.headers.Authorization = `Bearer ${data.access}`
        //   })
        return Promise.resolve(axiosInstance(originalRequest))
      }
      await store.dispatch(EndSplashLoading())
      return Promise.reject(error.response.data)
    }
    return Promise.reject(error.response.data)
  },
)

// api endpoints
export const API_POST_TOKEN_REFRESH = '/accounts/token/refresh/'
export const API_GET_PHOTOS = '/photos/random/'
