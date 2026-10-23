import { useLang } from "../i18n/useLang";

const linkClass = "hover:text-green2 transition-colors focus-visible:outline-2 focus-visible:outline-green2 rounded"

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="w-full max-w-6xl mx-auto border-t border-gray3/50 px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-base text-gray1">
      <p>© {new Date().getFullYear()} Bryant Tejeda. {t.footer.rights}</p>

      <div className="flex items-center gap-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`${linkClass} cursor-pointer`}
        >
          {t.footer.backToTop} ↑
        </button>
      </div>
    </footer>
  )
}
