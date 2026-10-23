import { useLang } from "../i18n/useLang"

export default function LanguageSwitcher() {
  const { lang, t, setLang } = useLang()

  return (
    <button
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      aria-label={t.language.switchTo}
      className="fixed top-28 right-[9px] min-[1200px]:top-[9px] z-40 flex items-center gap-2 glass rounded-xl px-5 py-2.5 text-lg text-text1 font-semibold cursor-pointer transition-colors hover:border-green2 hover:text-green2"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
      </svg>
      {t.language.label}
    </button>
  )
}
