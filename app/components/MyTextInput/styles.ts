import { StyleSheet } from 'react-native'
import colors from '../../config/colors'
import { width } from '../../config/constants'

export default StyleSheet.create({
  container: {
    width: width - 48,
  },
  defaultInnerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.dark_gray_100,
  },
  inputContainer: {
    flex: 1,
    textAlignVertical: 'bottom',
    height: 48,
  },
  focusStyle: {
    borderWidth: 1.5,
    borderColor: colors.neon_blue_800,
    backgroundColor: colors.white,
  },
  errorStyle: {
    backgroundColor: colors.accent_red_100,
  },

  disableStyle: {
    backgroundColor: colors.dark_gray_100,
  },

  labelTextStyle: {
    marginStart: 8,
  },

  rightSideContainer: {
    elevation: 100,
    position: 'absolute',
    right: 16,
  },

  leftSideContainer: {
    width: 32,
    height: 32,
    borderRadius: 12,
    position: 'absolute',
    left: 16,
  },
  sideComponentContainer: {
    elevation: 100,
    position: 'absolute',
    right: 16,
  },
  labelStyle: {
    paddingVertical: 4,
  },
  iconStyle: {
    paddingEnd: 8,
  },
})
