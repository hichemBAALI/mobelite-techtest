/**
 * @format
 * @flow strict-local
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { API_GET_PHOTOS, axiosInstance } from '../../config/apis'
import { CLIENT_ID } from '../../config/env'

export type UserImageType = {
  id?: string
  createdAt?: string
  updatedAt?: string
  urls: {
    thumb: string
    regular: string
    full: string
  }
  user: {
    username: string
    name: string
    profileImage: {
      small: string
    }
  }
  isSeen: boolean
}

const userImages: Partial<UserImageType>[] = []
const initialState = {
  userImages,
}
export const slice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    SetUserImages: (
      state,
      action: PayloadAction<UserImageType[]>,
    ) => {
      state.userImages = action.payload
    },
    SetSeen: (
      state,
      action: PayloadAction<Partial<UserImageType>>,
    ) => {
      state.userImages = [
        ...state?.userImages?.filter(
          (userImage) => userImage?.id !== action?.payload?.id,
        ),
        {
          ...action?.payload,
          isSeen: true,
        },
      ]
    },
  },
})

export const { SetUserImages, SetSeen } = slice.actions

const ReqGetUserImages: Function = () => (dispatch: any) =>
  new Promise((resolve, reject) => {
    axiosInstance
      .get(`${API_GET_PHOTOS}?count=16&client_id=${CLIENT_ID}`)
      .then(({ data }: any) => {
        //serialize the retrieved data
        const serializedUserImages = data?.map((userImage: any) => ({
          id: userImage?.id,
          createdAt: userImage?.created_at,
          updatedAt: userImage?.updated_at,
          urls: {
            thumb: userImage?.urls?.thumb,
            regular: userImage?.urls?.regular,
            full: userImage?.urls?.full,
          },
          user: {
            username: userImage?.user?.username,
            name: userImage?.user?.name,
            profileImage: {
              small: userImage?.user?.profile_image?.small,
            },
          },
        }))
        dispatch(SetUserImages(serializedUserImages))
        resolve(serializedUserImages)
      })
      .catch((error) => {
        console?.log({
          error,
        })
        reject()
      })
  })

export { ReqGetUserImages }

export default slice.reducer
