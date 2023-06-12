import React, { FC } from 'react'
import { RefreshControl, SectionList, View } from 'react-native'
import { listLoader } from '../../config/animations'
import colors from '../../config/colors'
import { width } from '../../config/constants'
import Loader from '../Loader'
import styles from './styles'

export type MySectionListProps = React.ComponentProps<
  typeof SectionList
> & {
  listViewRef?: any
  isRefreshing?: boolean
  onRefresh?: () => void
  contentContainerStyle?: object
  isFirstTimeLoading?: boolean
  renderItem: any
}
const MySectionList: FC<MySectionListProps> = (
  props: MySectionListProps,
) => {
  const loaderRender = () => (
    <View style={styles.indicatorContainer}>
      <Loader size={width - 40} isLoading source={listLoader} />
    </View>
  )

  const {
    isRefreshing = false,
    onRefresh,
    contentContainerStyle,
    isFirstTimeLoading = false,
  } = props

  const keyExtractor = (item: any, index: number) => item?.id + index

  return (
    <View style={styles.container}>
      {isFirstTimeLoading ? (
        loaderRender()
      ) : (
        <SectionList
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          keyExtractor={keyExtractor}
          key="v"
          contentContainerStyle={[
            styles.listContainer,
            contentContainerStyle,
          ]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          refreshing={isRefreshing}
          refreshControl={
            <RefreshControl
              colors={[colors.neon_blue_900, colors.dark_blue_900]}
              refreshing={isRefreshing}
              onRefresh={onRefresh}
            />
          }
        />
      )}
    </View>
  )
}

export default MySectionList
