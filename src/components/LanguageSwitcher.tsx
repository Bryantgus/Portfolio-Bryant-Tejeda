import { useLang } from "../i18n/useLang"

export default function LanguageSwitcher() {
  const { lang, t, setLang } = useLang()

  return (
    <button
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      aria-label={t.language.switchTo}
      className="fixed top-24 right-[9px] lg:top-[9px] z-40 flex items-center gap-2 rounded-xl border border-gray3 bg-gray2 px-4 py-2 text-text1 font-semibold cursor-pointer transition-colors hover:border-green2 hover:text-green2"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
      </svg>
      {t.language.label}
    </button>
  )
}
