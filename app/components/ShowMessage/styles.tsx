import { StyleSheet } from 'react-native'
import { isAndroidPlatform } from '../../config/utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: isAndroidPlatform ? 32 : 16,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  singleMessageContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: isAndroidPlatform ? 32 : 16,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },

  iconStyle: {
    marginEnd: 16,
  },
  textStyle: {
    flex: 1,
    marginEnd: 40,
  },
})
