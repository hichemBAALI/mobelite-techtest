import { View } from 'react-native'
import React, { FC } from 'react'
import { TouchableRipple } from 'react-native-paper'
import CachedImage from '../Image'
import styles from './styles'
import MyText from '../MyText'
import { WEIGHT } from '../../config/constants'
import { dateFormat } from '../../config/utils'

export type ImageItemType = {
  image?: string
  name: string
  date: string
  onPress: (arg: any) => void
}

const ImageItem: FC<ImageItemType> = (props: ImageItemType) => {
  const { image = 'placeholder', name, date, onPress } = props
  return (
    <View style={styles.container}>
      <TouchableRipple onPress={onPress}>
        <View style={styles.contentContainer}>
          <CachedImage
            style={[styles.imageStyle]}
            source={{
              uri: image,
            }}
            loaderSize={32}
            resizeMode="cover"
          />
          <View style={styles.descriptionContainer}>
            <MyText
              content={name}
              size={10}
              ellipsizeMode="tail"
              numberOfLines={1}
              weight={WEIGHT.BOLD}
            />
            <MyText
              content={dateFormat(date)}
              size={10}
              numberOfLines={1}
            />
          </View>
        </View>
      </TouchableRipple>
    </View>
  )
}

export default ImageItem
