import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  outlinedContainer: {
    margin: 12,
    borderRadius: 16,
    backgroundColor: 'transparent',
  },

  containerStyle: {
    margin: 12,
    height: 36,
    backgroundColor: 'transparent',
  },
  innerStyle: {
    justifyContent: 'center',

    backgroundColor: 'transparent',
  },

  defaultInnerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  iconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
