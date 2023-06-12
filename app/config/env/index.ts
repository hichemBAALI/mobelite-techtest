import { NativeModules } from 'react-native'

export const ENV_PROD = 'prod'
export const ENV_STG = 'stg'
export const ENV_DEV = 'dev'

const { RNConfig } = NativeModules

const getEnv = (env: string) => {
  switch (env) {
    case ENV_DEV:
      return {
        environment: 'development',
        baseUrl: 'https://api.com',
        color: '#0f0',
      }
    case ENV_STG:
      return {
        environment: 'staging',
        baseUrl: 'https://api.com',
        color: '#f00',
      }
    case ENV_PROD:
      return {
        environment: 'production',
        baseUrl: 'https://api.com',
        color: '#f00',
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
