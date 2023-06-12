/**
 * @format
 * @flow strict-local
 */
import React, { FC } from 'react'
import { Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'
import { WEIGHT } from '../../config/constants'
import styles from './styles'

export interface MyTextProps {
  content?: string
  style?: object
  size?: number
  weight?: string
  color?: string
  textAlign?: string
  numberOfLines?: number
  lineHeight?: number
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'
}
const MyText: FC<MyTextProps> = (props: MyTextProps) => {
  const {
    content,
    size = 14,
    color = colors.dark_gray_900,
    weight = WEIGHT.REGULAR,
    style,
    textAlign,
    numberOfLines,
    lineHeight = size * 1.4,
    ellipsizeMode = 'tail',
  } = props

  const fonts: Function = () => ({
    FONT_REGULAR: 'Poppins-Regular',
    FONT_LIGHT: 'Poppins-Light',
    FONT_MEDIUM: 'Poppins-Medium',
    FONT_BOLD: 'Poppins-Bold',
    FONT_THIN: 'Poppins-Thin',
  })

  const fontFamily = () => {
    switch (weight) {
      case WEIGHT.BOLD:
        return fonts().FONT_BOLD
      case WEIGHT.MEDIUM:
        return fonts().FONT_MEDIUM
      case WEIGHT.REGULAR:
        return fonts().FONT_REGULAR
      case WEIGHT.LIGHT:
        return fonts().FONT_LIGHT
      case WEIGHT.THIN:
        return fonts().FONT_THIN
      default:
        return fonts().FONT_REGULAR
    }
  }
  return (
    <Text
      style={[
        styles.container,
        {
          fontFamily: fontFamily(),
          fontSize: RFValue(size, 720),
          color,
          textAlign,
          lineHeight,
        },
        style,
      ]}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
    >
      {content}
    </Text>
  )
}

export default MyText
