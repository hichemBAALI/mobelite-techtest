import { NativeModules } from 'react-native'

//Actually this shouldn't be pushed to github
// it may be requested from the code admin (But it's just a test so I left It here)

export const ENV_PROD = 'prod'
export const ENV_STG = 'stg'
export const ENV_DEV = 'dev'

const { RNConfig } = NativeModules

const getEnv = (env: string) => {
  switch (env) {
    case ENV_DEV:
      return {
        environment: 'development',
        baseUrl: 'https://api.unsplash.com',
        color: '#0f0',
        apiClientId: 'WkpkHn39msSZ0PkJXe_XNeFWMYx8On_Xhtg1WC_r7sI',
      }
    case ENV_STG:
      return {
        environment: 'staging',
        baseUrl: 'https://api.unsplash.com',
        color: '#f00',
        apiClientId: 'WkpkHn39msSZ0PkJXe_XNeFWMYx8On_Xhtg1WC_r7sI',
      }
    case ENV_PROD:
      return {
        environment: 'production',
        baseUrl: 'https://api.unsplash.com',
        color: '#f00',
        apiClientId: 'WkpkHn39msSZ0PkJXe_XNeFWMYx8On_Xhtg1WC_r7sI',
      }

    default:
      return {
        environment: '',
        baseUrl: '',
        color: '',
      }
  }
}

export const BASE_URL = getEnv(RNConfig?.env).baseUrl
export const ENV = RNConfig?.env
export const ENV_COLOR = getEnv(RNConfig?.env).color
export const ENVIRONMENT = getEnv(RNConfig?.env).environment
export const CLIENT_ID = getEnv(RNConfig?.env).apiClientId
