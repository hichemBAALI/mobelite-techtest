/**
 * @format
 * @flow strict-local
 */
import React, { useState, FC, useEffect } from 'react'
import FastImage from 'react-native-fast-image'
import {
  View,
  Image,
  ImageResizeMode,
  ActivityIndicator,
} from 'react-native'
import styles from './styles'
import { isAndroidPlatform } from '../../config/utils'
import colors from '../../config/colors'

export interface ImageProps {
  isLoading?: boolean
  loaderStyle?: object
  loaderSize?: 'small' | 'large' | number
  style?: object
  source?: any
  defaultSource?: any
  resizeMode?: ImageResizeMode
  onError?: () => void
}

const CachedImage: FC<ImageProps> = (props: ImageProps) => {
  const {
    loaderStyle,
    style,
    source,
    defaultSource = {
      uri: 'https://cdn-icons-png.flaticon.com/512/225/225217.png?w=1380&t=st=1686525821~exp=1686526421~hmac=62a075fa47c4deccd51a740e68488e6d5b3e0c46f056ec0e9884773aba964688',
    },
    resizeMode,
    loaderSize = 100,
    isLoading = false,
    onError,
  } = props
  const [lIsLoading, setLoading] = useState(isLoading)
  const [lSource, setSource] = useState(source)
  useEffect(() => {
    isLoading || source?.uri === null
      ? setSource(defaultSource)
      : setSource(source)
  }, [isLoading])
  return (
    <View style={[styles.container]}>
      {lSource !== null && lSource?.uri !== '' && (
        <Image
          source={{
            ...lSource,
            cache: isAndroidPlatform
              ? FastImage.cacheControl.immutable
              : 'default',
            priority: FastImage.priority.high,
          }}
          resizeMode={resizeMode}
          style={style}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onError={() => {
            setLoading(false)
            setSource(defaultSource)
            onError && onError()
          }}
        />
      )}
      <View style={styles.loaderContainer}>
        {(lIsLoading || isLoading) && (
          <ActivityIndicator
            size={loaderSize}
            style={[loaderStyle]}
            color={colors.neon_blue_900}
          />
        )}
      </View>
    </View>
  )
}

export default CachedImage
