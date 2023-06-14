import { Dimensions } from 'react-native'

// Splash stack screens
export const SPLASH_STACK = 'SplashStack'
export const SPLASH_SCREEN = 'SplashScreen'

// Home stack screens
export const HOME_STACK = 'HomeStack'
export const HOME_SCREEN = 'HomeScreen'
export const DETAIL_SCREEN = 'DetailScreen'
/*********************************************/

// Dimensions
export const { width, height } = Dimensions.get('window')

//Platforms
export const ANDROID = 'android'
export const IOS = 'ios'

//Font Weight
export const WEIGHT = {
  BOLD: 'bold',
  MEDIUM: 'medium',
  REGULAR: 'regular',
  LIGHT: 'light',
  THIN: 'thin',
}
//Text Align
export const ALIGN = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
}

//Text input status
export const INPUT_STATUS = {
  IS_FOCUS: 'isFocus',
  IS_BLUR: 'isBlur',
  IS_SUCCESS: 'isSuccess',
  IS_ERROR: 'isError',
  IS_DISABLE: 'isDisable',
}

export const COUNTRY_PHONE_MASK: any = {
  KE: [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  // NG: [
  //   /\d/,
  //   /\d/,
  //   /\d/,
  //   ' ',
  //   /\d/,
  //   /\d/,
  //   /\d/,
  //   ' ',
  //   /\d/,
  //   /\d/,
  //   /\d/,
  // ],
  DZ: [
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
  ],
  OTHER: [
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
  ],
}
