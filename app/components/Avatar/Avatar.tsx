import { TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import CachedImage from '../Image'
import styles from './styles'

export type AvatarType = {
  thumb?: string
  isSeen?: boolean
  onPress: (arg: any) => void
}

const Avatar: FC<AvatarType> = (props: AvatarType) => {
  const { thumb = 'placeholder', isSeen = false, onPress } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.avatarContainer,
          !isSeen && styles?.notSeenYetStyle,
        ]}
      >
        <CachedImage
          style={[styles.avatarStyle]}
          source={{
            uri: thumb,
          }}
          loaderSize={32}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  )
}

export default Avatar
