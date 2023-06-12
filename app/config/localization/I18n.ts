import * as RNLocalize from 'react-native-localize'
import i18n from 'i18n-js'
import { memoize } from 'lodash'

const translationGetters: any = {
  en: require('./locales/en.json'),
}

const localize = memoize(
  (key: any, config?: any) =>
    config ? i18n.t(key, config) : i18n.t(key),
  (key: any, config?: any) =>
    config ? key + JSON.stringify(config) : key,
)

const setI18nConfig = () => {
  const fallback = {
    languageTag: 'en',
  }
  const { languageTag } =
    RNLocalize.findBestAvailableLanguage(
      Object.keys(translationGetters),
    ) || fallback

  localize?.cache?.clear && localize.cache?.clear()

  i18n.translations = {
    [languageTag]: translationGetters[languageTag],
  }
  i18n.locale = languageTag
}

const getCurrentLocale = () => {
  const languageTag = i18n.currentLocale().split('-').shift()
  if (languageTag && languageTag in translationGetters.keys) {
    return languageTag
  }
  return 'en'
}

const setCurrentLocale = (languageTag: string) => {
  i18n.locale = languageTag
}

export { localize, setI18nConfig, getCurrentLocale, setCurrentLocale }
