import React, { FC, useState, useRef } from 'react'
import { View, TextInput } from 'react-native'
import MyTextInput from '../MyTextInput'
import styles from './styles.'
import { localize } from '../../config/localization/I18n'
import colors from '../../config/colors'
import { INPUT_STATUS } from '../../config/constants'

export interface SearchFieldProps {
  onTyping: (text: string) => void
  placeholder?: string
  textColor?: string
  isAffectedByInputStyle?: boolean
  autoFocus?: boolean
}
const SearchField: FC<SearchFieldProps> = (
  props: SearchFieldProps,
) => {
  const {
    onTyping,
    placeholder = localize('Search'),
    textColor = colors.dark_gray_700,
    isAffectedByInputStyle = false,
    autoFocus = false,
  } = props

  const [searchInput, setSearchInput] = useState({
    ref: useRef<TextInput>(null),
    value: '',
    status: INPUT_STATUS.IS_BLUR,
  })

  return (
    <View style={[styles.container]}>
      <MyTextInput
        inputRef={searchInput.ref}
        containerStyle={{
          width: null,
          flex: 1,
        }}
        style={{
          color: textColor,
        }}
        value={searchInput.value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        iconName="Search"
        iconSize={24}
        iconColor={textColor}
        onSubmitEditing={() => {
          undefined
        }}
        onBlur={() => {
          isAffectedByInputStyle &&
            setSearchInput({
              ...searchInput,
              status: INPUT_STATUS.IS_BLUR,
            })
        }}
        onFocus={() => {
          isAffectedByInputStyle &&
            setSearchInput({
              ...searchInput,
              status: INPUT_STATUS.IS_FOCUS,
            })
        }}
        onChangeText={(text: string) => {
          setSearchInput({
            ...searchInput,
            value: text,
          })
          onTyping(text)
        }}
      />
    </View>
  )
}

export default SearchField
