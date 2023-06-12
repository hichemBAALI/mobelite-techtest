import React, { FC, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAppDispatch } from '../../../state/redux-hooks'
import { ReqGetUserImages } from '../../../state/reducers/collection'

const HomeScreen: FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(ReqGetUserImages())
  }, [])
  return <SafeAreaView />
}

export default HomeScreen
