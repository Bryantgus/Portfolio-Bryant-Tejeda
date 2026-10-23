import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext } from './context'
import { DEFAULT_LANG, LANGS, translations, type Lang } from './translations'

// El idioma sale de la ruta: /es o /en
const langFromPath = (): Lang | null => {
  const segment = window.location.pathname.split('/')[1]
  return LANGS.find((lang) => lang === segment) ?? null
}

// Si entran por "/" o una ruta desconocida, se usa el idioma del navegador
const browserLang = (): Lang =>
  navigator.language.toLowerCase().startsWith('en') ? 'en' : DEFAULT_LANG

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => langFromPath() ?? browserLang())

  useEffect(() => {
    if (langFromPath() !== lang) {
      window.history.replaceState(null, '', `/${lang}${window.location.hash}`)
    }
  }, [lang])

  // Botones atras/adelante del navegador
  useEffect(() => {
    const onPopState = () => setLangState(langFromPath() ?? browserLang())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
  }, [lang, t])

  const setLang = useCallback((next: Lang) => {
    window.history.pushState(null, '', `/${next}${window.location.hash}`)
    setLangState(next)
  }, [])

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
