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
import ImageItem from '../../../components/ImageItem/ImageItem'
import SearchField from '../../../components/SearchField'

const HomeScreen: FC = () => {
  const dispatch = useAppDispatch()
  const { userImages } = useAppSelector((state) => state?.collection)

  const [lUserImages, setUserImages] =
    useState<Partial<UserImageType>[]>(userImages)

  const [lImages, setImages] =
    useState<Partial<UserImageType>[]>(userImages)

  //handlers
  const handleAvatarPressed = (userImage: Partial<UserImageType>) => {
    dispatch(SetSeen(userImage))
  }

  const handleImagePressed = (userImage: Partial<UserImageType>) => {
    console.log(userImage)
  }

  const handleImageSearch = (textToSearch: string) => {
    setImages(
      userImages?.filter(
        (userImage) =>
          userImage?.user?.name.includes(textToSearch) ||
          userImage?.user?.username.includes(textToSearch),
      ),
    )
  }

  //useEffects
  useEffect(() => {
    dispatch(ReqGetUserImages())
  }, [])

  useEffect(() => {
    setUserImages(userImages)
    setImages(userImages)
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

  const ImageSearcherField = () => (
    <SearchField
      onTyping={handleImageSearch}
      placeholder="Search an image"
    />
  )

  const UsersBodyList = (props: any) => {
    const { data } = props
    return (
      <MyList
        useFlatList
        data={data}
        keyboardShouldPersistTaps="never"
        recalculateHiddenLayout
        numColumns={2}
        renderItem={({ item }: any) => (
          <ImageItem
            image={item?.urls?.regular}
            name={`@${item?.user?.username?.toLowerCase()}`}
            date={item?.createdAt}
            onPress={() => handleImagePressed(item)}
          />
        )}
      />
    )
  }

  return (
    <SafeAreaView style={commonStyles.container}>
      <UsersHeaderList data={lUserImages} />
      <ImageSearcherField />
      <UsersBodyList data={lImages} />
    </SafeAreaView>
  )
}

export default HomeScreen
