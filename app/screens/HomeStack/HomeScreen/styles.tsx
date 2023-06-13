import { StyleSheet } from 'react-native'
import colors from '../../../config/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark_gray_100,
  },
  userAvatarStyle: {
    flex: 1,
    width: 82,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userHeaderListContainer: {
    height: 100,
    borderBottomWidth: 1.5,
    borderColor: colors.dark_gray_300,
  },
})
export default styles
