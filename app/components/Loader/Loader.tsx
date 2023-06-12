import React, { FC } from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native' // if you have "esModuleInterop": true
import styles from './styles'

export interface LoaderProps {
  size?: number
  containerStyle?: object
  isLoading: boolean
  autoPlay?: boolean
  loop?: boolean
  source?: any
}
const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  const {
    size = 24,
    containerStyle,
    isLoading = false,
    autoPlay = true,
    loop = true,
    source = require('./loader.json'),
  } = props
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
        },
        containerStyle,
      ]}
    >
      {isLoading && (
        <LottieView source={source} autoPlay={autoPlay} loop={loop} />
      )}
    </View>
  )
}

export default Loader
