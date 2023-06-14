import { Platform } from 'react-native'

import dayjs from 'dayjs'

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

const dateFormat = (date: string, format = 'DD MMM YYYY') =>
  dayjs(date).format(format)

export { isAndroidPlatform, toCamelCase, toEs6Object, dateFormat }
