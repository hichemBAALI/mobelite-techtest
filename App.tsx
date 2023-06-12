/* eslint-disable import/no-extraneous-dependencies */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import FlashMessage from 'react-native-flash-message'

import {
  ColorSchemeProvider,
  useDarkMode,
} from 'react-native-dynamic'
import { setI18nConfig } from './app/config/localization/I18n'
import RootStackScreens, { navigationRef } from './app/navigation'
import { persistor, store } from './app/state/store'
import 'react-native-gesture-handler'

const App = () => {
  setI18nConfig()
  //useEffect
  const WrappedApp = () => {
    const isDarkMode = useDarkMode()
    //checkUpdate

    return (
      <ColorSchemeProvider mode={isDarkMode ? 'dark' : 'light'}>
        <NavigationContainer ref={navigationRef}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <RootStackScreens />
          </SafeAreaProvider>
          <FlashMessage position="top" />
        </NavigationContainer>
      </ColorSchemeProvider>
    )
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WrappedApp />
      </PersistGate>
    </Provider>
  )
}

export default App
