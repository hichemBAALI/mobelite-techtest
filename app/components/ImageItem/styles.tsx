import { StyleSheet } from 'react-native'
import colors from '../../config/colors'
import { width } from '../../config/constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
  },
  contentContainer: {
    justifyContent: 'center',
  },
  imageStyle: {
    height: 150,
    width: width / 2 - 24,
    backgroundColor: colors.neon_blue_100,
  },
  descriptionContainer: {
    paddingTop: 8,
  },
})
