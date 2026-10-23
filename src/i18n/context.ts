import { createContext } from 'react'
import { DEFAULT_LANG, translations, type Lang, type Translations } from './translations'

export type LanguageContextValue = {
  lang: Lang
  t: Translations
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: DEFAULT_LANG,
  t: translations[DEFAULT_LANG],
  setLang: () => {},
})
