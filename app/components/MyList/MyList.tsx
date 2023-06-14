import React, { FC, ReactNode, useCallback } from 'react'
import { RefreshControl, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { listLoader } from '../../config/animations'
import colors from '../../config/colors'
import { width } from '../../config/constants'
import Loader from '../Loader'
import styles from './styles'

export type MyListProps = React.ComponentProps<
  typeof SwipeListView
> & {
  listViewRef?: any
  isRefreshing?: boolean
  onRefresh?: () => void
  contentContainerStyle?: object
  isFirstTimeLoading?: boolean
  loader?: ReactNode
  renderItem: any
}
const MyList: FC<MyListProps> = (props: MyListProps) => {
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
    loader = loaderRender(),
  } = props

  const keyExtractor = useCallback(
    (item: any, index: number) => `${item}--${index}`,
    [],
  )

  return (
    <View style={styles.container}>
      {isFirstTimeLoading ? (
        loader
      ) : (
        <SwipeListView
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          keyExtractor={keyExtractor}
          key="v"
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={10}
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

export default MyList
