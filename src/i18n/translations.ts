import es from './es.json'
import en from './en.json'

export const LANGS = ['es', 'en'] as const
export type Lang = (typeof LANGS)[number]
export type Translations = typeof es

// `en` debe tener exactamente la misma forma que `es`
export const translations: Record<Lang, Translations> = { es, en }

export const DEFAULT_LANG: Lang = 'es'
