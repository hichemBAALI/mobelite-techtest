import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock'
import mock from 'react-native-permissions/mock'
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js'
import * as ReactNative from 'react-native'

jest.mock('react-native-device-info', () => mockRNDeviceInfo)
jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist')
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  }
})
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
jest.mock('react-native-permissions', () => {
  return mock
})
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo)

jest.mock('@notifee/react-native', () =>
  require('@notifee/react-native/jest-mock'),
)

jest.doMock('react-native', () => {
  return Object.setPrototypeOf(
    {
      Platform: {
        OS: 'android',
        select: () => {},
      },
      NativeModules: {
        ...ReactNative.NativeModules,
        NotifeeApiModule: {
          addListener: jest.fn(),
          eventsAddListener: jest.fn(),
          eventsNotifyReady: jest.fn(),
        },
      },
    },
    ReactNative,
  )
})
