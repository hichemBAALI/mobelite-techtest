import React from 'react'

import {
  hideMessage,
  showMessage as Message,
} from 'react-native-flash-message'
import colors from '../../config/colors'
import MyText from '../MyText'
import { WEIGHT } from '../../config/constants'
import styles from './styles'
import Iconsax from '../Iconsax'

const ShowMessage = (props: any) => {
  const { message, description, style, duration, onPress } = props
  const defaultConfig = {
    duration: duration || 4000,
    onPress,
    message: (
      <MyText
        content={message}
        color={colors.white}
        size={14}
        weight={WEIGHT.BOLD}
        style={styles.textStyle}
      />
    ),
    description: (
      <MyText
        content={description}
        color={colors.white}
        size={12}
        style={styles.textStyle}
      />
    ),
    style: {
      ...style,
      ...styles.container,
    },
    icon: 'auto',
    titleStyle: styles.textStyle,
    textStyle: styles.textStyle,
  }
  return Message({
    ...props,
    ...defaultConfig,
  })
}

const ShowSingleLineMessage = (props: any) => {
  const { message, description, style, duration, onPress } = props
  const defaultConfig = {
    duration: duration || 4000,
    hideOnPress: !onPress,
    onPress,
    message: (
      <MyText
        content={message}
        color={colors.white}
        size={14}
        weight={WEIGHT.BOLD}
        style={styles.textStyle}
      />
    ),
    description: (
      <MyText
        content={description}
        color={colors.white}
        size={12}
        style={styles.textStyle}
      />
    ),
    style: {
      ...style,
      ...styles.container,
    },
    icon: 'auto',
    titleStyle: styles.textStyle,
    textStyle: styles.textStyle,
  }
  return Message({
    ...props,
    ...defaultConfig,
  })
}

const showSuccessMessage = (props: any) => {
  ShowMessage({
    ...props,
    style: {
      ...props.style,
      backgroundColor: colors.neon_green_800,
    },
    renderFlashMessageIcon: () => (
      <Iconsax
        name="TickCircle"
        size={30}
        color={colors.white}
        style={styles.iconStyle}
      />
    ),
  })
}

const showErrorMessage = (props: any) => {
  ShowMessage({
    ...props,
    style: {
      ...props.style,
      backgroundColor: colors.accent_red_800,
    },
    renderFlashMessageIcon: () => (
      <Iconsax
        name="CloseCircle"
        size={30}
        color={colors.white}
        style={styles.iconStyle}
      />
    ),
  })
}

const showWarningMessage = (props: any) => {
  ShowMessage({
    ...props,
    style: {
      ...props.style,
      backgroundColor: colors.warning_yellow,
    },
    renderFlashMessageIcon: () => (
      <Iconsax
        name="InfoCircle"
        size={30}
        color={colors.white}
        style={styles.iconStyle}
      />
    ),
  })
}

const showInfoMessage = (props: any) => {
  ShowMessage({
    ...props,
    style: {
      ...props.style,
      backgroundColor: colors.neon_blue_800,
    },
    renderFlashMessageIcon: () => (
      <Iconsax
        name="MessageCircle"
        size={30}
        color={colors.white}
        style={styles.iconStyle}
      />
    ),
  })
}

const showNoInternetMessage = (props: any) => {
  ShowSingleLineMessage({
    ...props,
    autoHide: 0,
    onPress: hideMessage,
    style: {
      ...props.style,
      backgroundColor: colors.accent_red_700,
    },
    renderFlashMessageIcon: () => (
      <Iconsax
        name="WifiSquare"
        size={30}
        color={colors.white}
        style={styles.iconStyle}
      />
    ),
  })
}

const showWaitingForInternetMessage = (props: any) => {
  ShowSingleLineMessage({
    ...props,
    autoHide: 0,
    onPress: hideMessage,
    style: {
      ...props.style,
      backgroundColor: colors.warning_yellow,
    },
    renderFlashMessageIcon: () => (
      <Iconsax
        name="WifiSquare"
        size={30}
        color={colors.white}
        style={styles.iconStyle}
      />
    ),
  })
}

const showBackOnlineMessage = (props: any) => {
  ShowSingleLineMessage({
    ...props,
    style: {
      ...props.style,
      backgroundColor: colors.neon_green_600,
    },
    renderFlashMessageIcon: () => (
      <Iconsax
        name="WifiSquare"
        size={30}
        color={colors.white}
        style={styles.iconStyle}
      />
    ),
  })
}

export {
  ShowMessage,
  showInfoMessage,
  showWarningMessage,
  showErrorMessage,
  showSuccessMessage,
  showNoInternetMessage,
  showWaitingForInternetMessage,
  showBackOnlineMessage,
}
