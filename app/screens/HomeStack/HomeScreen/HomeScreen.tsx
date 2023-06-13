/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import {
  useAppDispatch,
  useAppSelector,
} from '../../../state/redux-hooks'
import {
  ReqGetUserImages,
  SetSeen,
  UserImageType,
} from '../../../state/reducers/collection'
import Avatar from '../../../components/Avatar'
import commonStyles from '../../../config/commonStyles'
import MyText from '../../../components/MyText'
import { ALIGN } from '../../../config/constants'
import MyList from '../../../components/MyList'
import styles from './styles'

const HomeScreen: FC = () => {
  const dispatch = useAppDispatch()
  const { userImages } = useAppSelector((state) => state?.collection)

  const [lUserImages, setUserImages] =
    useState<Partial<UserImageType>[]>(userImages)

  //handlers
  const handleAvatarPressed = (userImage: Partial<UserImageType>) => {
    dispatch(SetSeen(userImage))
  }

  //useEffects
  useEffect(() => {
    dispatch(ReqGetUserImages())
  }, [])

  useEffect(() => {
    setUserImages(userImages)
  }, [userImages])
  //renders
  const AvatarWithUserName: FC = (props: Partial<UserImageType>) => (
    <View style={styles.userAvatarStyle}>
      <Avatar
        onPress={() => handleAvatarPressed(props)}
        isSeen={props?.isSeen}
        thumb={
          props?.isSeen
            ? props?.user?.profileImage?.small
            : props?.urls?.thumb
        }
      />
      <MyText
        content={props?.user?.name}
        size={10}
        ellipsizeMode="tail"
        numberOfLines={1}
        textAlign={ALIGN.CENTER}
      />
    </View>
  )

  const UsersHeaderList = (props: any) => {
    const { data } = props
    return (
      <View style={styles.userHeaderListContainer}>
        <MyList
          useFlatList
          data={data}
          recalculateHiddenLayout
          horizontal
          renderItem={({ item }: any) => (
            <AvatarWithUserName {...item} />
          )}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={commonStyles.container}>
      <UsersHeaderList data={lUserImages} />
    </SafeAreaView>
  )
}

export default HomeScreen
