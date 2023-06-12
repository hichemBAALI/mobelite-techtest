/**
 * @format
 * @flow strict-local
 */
import React, { FC } from 'react'
import * as Icon from 'iconsax-react-native'
import { View } from 'react-native'

export interface IconProps {
  name: keyof typeof Icon
  size: number
  color: string
  style?: object
  variant?:
    | 'Linear'
    | 'Outline'
    | 'Broken'
    | 'Bold'
    | 'Bulk'
    | 'TwoTone'
    | undefined
}

const Iconsax: FC<IconProps> = (props: IconProps) => {
  const { name, size, color, style, variant } = props
  const Name = Icon[name]

  return (
    <View style={style}>
      {Name ? (
        <Name size={size} color={color} variant={variant} />
      ) : null}
    </View>
  )
}
export default Iconsax
