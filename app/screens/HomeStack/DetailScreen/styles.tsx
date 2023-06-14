import { StyleSheet } from 'react-native'
import colors from '../../../config/colors'
import { width } from '../../../config/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark_gray_100,
  },
  topImageStyle: {
    width,
    height: 220,
  },
  goBackIconContainer: {
    zIndex: 100,
    position: 'absolute',
    top: 16,
    left: 16,
  },
  userAvatarStyle: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    flexDirection: 'row',
  },
  bodyContainer: {
    margin: 20,
  },
  smallDescriptionStyle: {
    marginVertical: 12,
    paddingLeft: 6,
  },
  longDescriptionStyle: {
    marginVertical: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors?.dark_gray_400,
    padding: 8,
  },
  dateStyle: {
    marginTop: 12,
    paddingLeft: 6,
  },
})
export default styles
