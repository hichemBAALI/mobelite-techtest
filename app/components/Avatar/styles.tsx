import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

export default StyleSheet.create({
  container: {
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    width: 64,
    height: 64,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
  },
  notSeenYetStyle: {
    borderWidth: 3,
    borderColor: colors.warning_yellow,
  },
  avatarStyle: {
    width: 56,
    height: 56,
    margin: 4,
    borderRadius: 30,
    overflow: 'hidden',
  },
})
