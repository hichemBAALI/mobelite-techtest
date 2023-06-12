/**
 * @format
 * @flow strict-local
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const fcmToken: any = undefined
const os: any = undefined
export const slice = createSlice({
  name: 'device',
  initialState: {
    fcmToken,
    os,
  },
  reducers: {
    SetFCMToken: (state, action: PayloadAction<string>) => {
      state.fcmToken = action.payload
    },
    SetOS: (state, action: PayloadAction<string>) => {
      state.os = action.payload
    },
  },
})

export const { SetFCMToken, SetOS } = slice.actions

export default slice.reducer
