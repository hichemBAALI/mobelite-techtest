import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native'
import {
  HOME_SCREEN,
  HOME_STACK,
  SPLASH_SCREEN,
  SPLASH_STACK,
} from '../config/constants'
import SplashScreen from '../screens/SplashStack/SplashScreen'
import { useAppSelector } from '../state/redux-hooks'
import HomeScreen from '../screens/HomeStack/HomeScreen'

const noHeader = {
  headerShown: false,
  headerTransparent: true,
  headerShadowVisible: false,
}

const SplashStack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()
const RootStack = createNativeStackNavigator()

// export const headerRender = () => ({
//   header: () => <View />,
// })

const screenOptions: any = {
  gestureEnabled: false,
  gestureDirection: 'horizontal',
}

// ************** START SplashStack **********//
const SplashStackScreens: FC = () => {
  console.log(SPLASH_STACK)
  return (
    <SplashStack.Navigator screenOptions={screenOptions}>
      <SplashStack.Screen
        name={SPLASH_SCREEN}
        component={SplashScreen}
        options={noHeader}
      />
    </SplashStack.Navigator>
  )
}
// ************** END SplashStack **********//

// ************** START HomeStack **********//
const HomeStackScreens: FC = () => {
  console.log(HOME_STACK)
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={noHeader}
      />
    </HomeStack.Navigator>
  )
}
// ************** END HomeStack **********//

const RootStackScreens: FC = () => {
  const { isSplashLoading } = useAppSelector(
    (state) => state.connection,
  )
  if (isSplashLoading) {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name={SPLASH_STACK}
          component={SplashStackScreens}
          options={noHeader}
        />
      </RootStack.Navigator>
    )
  }

  return (
    <RootStack.Navigator screenOptions={screenOptions}>
      <RootStack.Screen
        name={HOME_STACK}
        component={HomeStackScreens}
        options={noHeader}
      />
    </RootStack.Navigator>
  )
}

export const navigationRef = createNavigationContainerRef()

export function navigateTo(routeName: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params))
  }
}

export default RootStackScreens
