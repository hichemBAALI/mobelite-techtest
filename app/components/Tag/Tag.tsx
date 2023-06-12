/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react'
import { ViewStyle } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import colors from '../../config/colors'
import styles from './styles'
import MyText, { MyTextProps } from '../MyText/MyText'

export type TagProps = MyTextProps & {
  backgroundColor?: string
  containerStyle?: ViewStyle
  color?: string
  onPress?: () => void
}

const Tag: FC<TagProps> = (props: TagProps) => {
  const {
    backgroundColor = colors.neon_blue_800,
    containerStyle,
    color = colors.white,
    onPress,
  } = props
  return (
    <TouchableRipple
      borderless
      style={[
        styles.container,
        {
          backgroundColor,
        },
        containerStyle,
      ]}
      onPress={onPress}
    >
      <MyText {...props} color={color} />
    </TouchableRipple>
  )
}

export default Tag
