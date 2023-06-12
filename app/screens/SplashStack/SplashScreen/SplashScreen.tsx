import React, { FC } from 'react'
import { StatusBar, View } from 'react-native'
import { SvgWithCss } from 'react-native-svg'
import styles from './styles'
import { ENV, ENV_COLOR } from '../../../config/env'
import MyText from '../../../components/MyText'
import { logo } from '../../../config/images'

const SplashScreen: FC = ({ navigation }: any) => {
  console.log({
    navigation,
  })
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <SvgWithCss
        height={150}
        xml={logo.toString()}
        style={styles.splashLogoStyle}
      />

      {ENV === 'stg' ||
        (ENV === 'dev' && (
          <MyText
            content={ENV}
            style={{
              backgroundColor: ENV_COLOR,
            }}
          />
        ))}
    </View>
  )
}

export default SplashScreen
