import { Platform } from 'react-native'

const isAndroidPlatform = Platform.OS === 'android'

const toCamelCase = (jsonString: string) =>
  jsonString.replace(/_([a-z])/g, (g: any) => g[1].toUpperCase())

const toEs6Object = (json: any) => {
  try {
    const result =
      JSON.parse(JSON.parse(toCamelCase(JSON.stringify(json)))) ||
      json
    return result
  } catch (error) {
    return json
  }
}

export { isAndroidPlatform, toCamelCase, toEs6Object }
