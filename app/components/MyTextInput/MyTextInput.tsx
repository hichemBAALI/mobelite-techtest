/* eslint-disable react/jsx-props-no-spreading */
/**
 * @format
 * @flow strict-local
 */
import React, { FC } from 'react'
import { TextInput, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'
import { WEIGHT } from '../../config/constants'
import MyText from '../MyText'
import styles from './styles'
import Iconsax from '../Iconsax'

export type MyTextInputProps = React.ComponentProps<
  typeof TextInput
> & {
  containerStyle: any
  iconName: any
  iconColor: string
  iconSize: number
  inputRef: any
  size?: number
  weight?: string
  label?: string
}

const MyTextInput: FC<MyTextInputProps> = (
  props: MyTextInputProps,
) => {
  const {
    iconName,
    iconColor,
    iconSize = 16,
    inputRef,
    style,
    containerStyle,
    weight = WEIGHT.REGULAR,
    size = 12,
    label,
  }: MyTextInputProps = props

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
    <View style={[styles.container, containerStyle]}>
      {label?.length && (
        <MyText
          content={label}
          size={12}
          weight={WEIGHT.MEDIUM}
          color={colors.dark_gray_700}
          style={styles.labelStyle}
        />
      )}
      <View style={[styles.defaultInnerStyle]}>
        {iconName?.length && (
          <Iconsax
            name={iconName}
            color={iconColor}
            size={iconSize}
            style={styles.iconStyle}
          />
        )}
        <TextInput
          {...props}
          ref={inputRef}
          style={[
            styles.inputContainer,
            {
              fontFamily: fontFamily(),
              fontSize: RFValue(size, 720),
            },
            style,
          ]}
        />
      </View>
    </View>
  )
}

export default MyTextInput
