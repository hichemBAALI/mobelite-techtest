import React, { FC } from 'react'
import { View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import CachedImage from '../../../components/Image'
import Avatar from '../../../components/Avatar'
import MyText from '../../../components/MyText'
import { ALIGN, WEIGHT } from '../../../config/constants'
import styles from './styles'
import colors from '../../../config/colors'
import { dateFormat } from '../../../config/utils'
import Iconsax from '../../../components/Iconsax'

const DetailScreen: FC = ({ navigation, route }: any) => {
  console.log({
    navigation,
  })

  const { userImage } = route?.params

  const AvatarWithUserNameRender: FC = () => (
    <View style={styles.userAvatarStyle}>
      <Avatar
        onPress={() => undefined}
        isSeen={userImage?.isSeen}
        thumb={userImage?.user?.profileImage?.small}
      />
      <MyText
        content={userImage?.user?.name}
        size={12}
        ellipsizeMode="tail"
        numberOfLines={1}
        color={colors.white}
        weight={WEIGHT.BOLD}
        textAlign={ALIGN.CENTER}
      />
    </View>
  )
  const TopSectionRender = () => (
    <View>
      <TouchableRipple
        onPress={navigation.goBack}
        style={styles.goBackIconContainer}
      >
        <Iconsax name="ArrowLeft" size={32} color={colors.white} />
      </TouchableRipple>

      <CachedImage
        style={[styles.topImageStyle]}
        source={{
          uri: userImage?.urls?.regular,
        }}
        loaderSize={32}
        resizeMode="cover"
      />
      <AvatarWithUserNameRender />
    </View>
  )

  const BodySectionRender = () => (
    <View style={styles.bodyContainer}>
      <MyText
        content="Lorem Ipsum"
        size={16}
        ellipsizeMode="tail"
        numberOfLines={1}
        weight={WEIGHT.BOLD}
        style={styles.smallDescriptionStyle}
      />

      <MyText
        content="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum "
        size={14}
        ellipsizeMode="tail"
        numberOfLines={5}
        style={styles.longDescriptionStyle}
      />

      <MyText
        content={`Created at: ${dateFormat(userImage?.createdAt)}`}
        size={10}
        ellipsizeMode="tail"
        numberOfLines={1}
        style={styles.dateStyle}
      />
      <MyText
        content={`Updated at: ${dateFormat(userImage?.updatedAt)}`}
        size={10}
        ellipsizeMode="tail"
        numberOfLines={1}
        style={styles.dateStyle}
      />
    </View>
  )
  return (
    <View>
      <TopSectionRender />
      <BodySectionRender />
    </View>
  )
}

export default DetailScreen
