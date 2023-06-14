import { StyleSheet } from 'react-native'
import colors from './colors'
import { width } from './constants'
import { isAndroidPlatform } from './utils'

export default StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.bottom_nav_bg,
    elevation: 0,
    borderWidth: 0,
    borderTopWidth: 0,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  nonPaddedContainer: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: isAndroidPlatform ? 0 : 20,
    backgroundColor: '#ffffff',
  },

  bottomPaddedContainer: {
    flex: 1,
    paddingBottom: isAndroidPlatform ? 52 : 20,
    backgroundColor: '#ffffff',
  },
  keyboardAvoidStyle: {
    flex: 1,
  },
  submitContainer: {
    justifyContent: 'flex-end',
    marginBottom: isAndroidPlatform ? 0 : 16,
    alignItems: 'center',
    alignSelf: 'center',
  },
  primaryPressableText: {
    marginBottom: isAndroidPlatform ? 0 : 16,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: width - 40,
    marginHorizontal: 0,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 20,
  },

  partialModalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
    height: 'auto',
    position: 'absolute',
    bottom: 0,
  },
  partialModalStyle: {
    height: 'auto',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width,
  },
  modalSubmitContainer: {
    justifyContent: 'flex-end',
  },
  listContainer: {
    flexGrow: 0,
    paddingBottom: 16,
  },
  animatedRefreshListStyle: {
    width,
    height: 7,
    zIndex: 10000,
  },
  animatedRefreshView: {
    width,
    height: 7,
    position: 'absolute',
    bottom: -7,
    zIndex: 0,
  },

  halfModalContainer: {
    margin: 0,
    flex: 0.5,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  halfModalStyle: {
    paddingVertical: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    bottom: 0,
    width,
  },
})
