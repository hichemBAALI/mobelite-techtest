import React, { FC } from 'react'
import { TextInput, TouchableRipple } from 'react-native-paper'
import styles from './styles.'
import { localize } from '../../config/localization/I18n'
import colors from '../../config/colors'
import Iconsax from '../Iconsax'

export interface SearchFieldProps {
  onTyping: (text: string) => void
  onClear?: () => void
  placeholder?: string
}
const SearchField: FC<SearchFieldProps> = (
  props: SearchFieldProps,
) => {
  const {
    onTyping,
    onClear,
    placeholder = localize('Search'),
  } = props

  return (
    <TextInput
      placeholder={placeholder}
      mode="outlined"
      onSubmitEditing={() => {
        undefined
      }}
      onChangeText={(text: string) => {
        onTyping(text)
      }}
      outlineStyle={styles?.outlinedContainer}
      contentStyle={styles?.containerStyle}
      style={styles?.innerStyle}
      left={
        <Iconsax
          style={styles.iconStyle}
          name="SearchNormal"
          size={48}
          color={colors.dark_gray_900}
        />
      }
      right={
        <TouchableRipple onPress={onClear}>
          <Iconsax
            name="SearchNormal"
            size={16}
            color={colors.dark_gray_900}
          />
        </TouchableRipple>
      }
    />
  )
}

export default SearchField
