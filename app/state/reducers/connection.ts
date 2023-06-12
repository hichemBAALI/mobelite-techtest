/**
 * @format
 * @flow strict-local
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import NetInfo from '@react-native-community/netinfo'
import {
  showBackOnlineMessage,
  showNoInternetMessage,
  showWaitingForInternetMessage,
} from '../../components/ShowMessage/ShowMessage'

export const slice = createSlice({
  name: 'connection',
  initialState: {
    isSplashLoading: true,
    isOnline: true,
    shouldGetData: true,
  },
  reducers: {
    setSplashLoading: (state, action: PayloadAction<boolean>) => {
      state.isSplashLoading = action.payload
    },
    SetOnline: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload
    },
  },
})

export const { setSplashLoading, SetOnline } = slice.actions

const EndSplashLoading: Function = () => (dispatch: any) => {
  dispatch(setSplashLoading(false))
}

const handleNetworkListener: Function =
  () => (dispatch: any, getState: any) => {
    const unsubscribe = NetInfo?.addEventListener((state) => {
      const { isOnline } = getState()?.connection
      const { isConnected, isInternetReachable } = state
      if (!isConnected) {
        dispatch(SetOnline(false))
        showNoInternetMessage({
          message: 'No Network',
          description:
            "You're not connected to any network. Please select a network to continue",
        })
      } else if (
        !isInternetReachable &&
        isInternetReachable !== null
      ) {
        dispatch(SetOnline(false))
        showWaitingForInternetMessage({
          message: 'Waiting for network',
          description: 'A reconnection attempt is in progress',
        })
      } else if (!isOnline) {
        dispatch(SetOnline(true))
        showBackOnlineMessage({
          message: 'Connected',
          description: "You're back online",
          duration: 1500,
        })
      }
    })
    return () => unsubscribe()
  }

export { EndSplashLoading, handleNetworkListener }

export default slice.reducer
