/**
 * @format
 * @flow strict-local
 */
import { configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-community/async-storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import persistStore from 'redux-persist/es/persistStore'
import { NativeModules } from 'react-native'
import { rootReducers } from '../reducers'
import { ENV_PROD } from '../../config/env'

const { RNConfig } = NativeModules
const ENABLE_REDUX_DEV_TOOLS = RNConfig?.env !== ENV_PROD
console.log({
  ENABLE_REDUX_DEV_TOOLS,
})

const reducers = combineReducers(rootReducers)
const persistConfig = {
  key: 'root',
  timeout: 0,
  storage: AsyncStorage,
  // only not persisted reducers
  blacklist: ['connection', 'collection'],
}

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  devTools: ENABLE_REDUX_DEV_TOOLS,
  middleware: [thunk, logger],
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { store, persistor }
