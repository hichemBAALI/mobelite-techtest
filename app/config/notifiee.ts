/* eslint-disable object-curly-newline */
import notifee, {
  AuthorizationStatus,
  Notification,
} from '@notifee/react-native'
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging'
import { Platform } from 'react-native'
import { showWarningMessage } from '../components/ShowMessage'
import { store } from '../state/store'
import { SetFCMToken, SetOS } from '../state/reducers/device'
import { logo } from './images'

const REMOTE_CHANNEL = 'REMOTE_CHANNEL'

async function checkNotificationPermission() {
  const settings = await notifee.getNotificationSettings()
  if (
    settings?.authorizationStatus === AuthorizationStatus?.DENIED ||
    settings?.authorizationStatus ===
      AuthorizationStatus?.NOT_DETERMINED
  ) {
    const result = await notifee.requestPermission()
    const enabled =
      result?.authorizationStatus ===
        messaging?.AuthorizationStatus.AUTHORIZED ||
      result?.authorizationStatus ===
        messaging?.AuthorizationStatus.PROVISIONAL
    if (enabled) {
      const token = await messaging().getToken()
      token &&
        (store.dispatch(SetFCMToken(token)),
        store.dispatch(SetOS(Platform.OS)))
    } else {
      showWarningMessage({
        message: 'Push notifications',
        description:
          "You're not allowed to receive notifications. Please go to the app settings and enable this permission",
      })
    }
  }
}

const onMessageHandler = (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
) => {
  const { notification, data } = remoteMessage
  notifee.displayNotification({
    title: notification?.title,
    body: notification?.body,
    data,
  })
}

const setLocalPushNotification = async (
  notification: Notification | any,
) => {
  // Request permissions (required for iOS)
  await notifee.requestPermission()

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: REMOTE_CHANNEL,
    name: REMOTE_CHANNEL,
  })

  // Display a notification
  await notifee.displayNotification({
    ...notification,
    android: {
      ...notification?.android,
      channelId,
      largeIcon: 'notification',
      largeIconUrl: logo,
      smallIcon: 'notification',
      pressAction: {
        id: 'default',
        launchActivity: 'default',
      },
    },
  })
}

export {
  setLocalPushNotification,
  checkNotificationPermission,
  onMessageHandler,
}
