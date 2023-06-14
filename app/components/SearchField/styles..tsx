import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 20,
    zIndex: 1000,
  },

  defaultInnerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  defaultStyle: {
    color: colors.white,
  },
  closeStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    marginStart: 8,
  },
})
