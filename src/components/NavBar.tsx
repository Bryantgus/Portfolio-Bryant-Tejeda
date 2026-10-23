import { useState } from "react";
import ItemNavBar from "./ItemNavBar"
import PuntoPulso from "./PuntoPulso";
import { useLang } from "../i18n/useLang";

type Props = {
  title: string;
  setTitle: (title: string) => void
}

// Los ids coinciden con los id de cada <section> en App y con las llaves de t.nav
const navBarItems = ['inicio', 'sobreMi', 'experiencia', 'proyectos', 'habilidades', 'contacto'] as const

export default function NavBar({ title, setTitle }: Props) {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  const selectItem = (item: string) => {
    setTitle(item)
    setOpen(false)
  }

  const resumeLink = (
    <a
      href={t.nav.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setOpen(false)}
      className="glass-green text-white text-[17px] font-semibold rounded-xl px-5 py-2 cursor-pointer transition hover:border-green2 focus-visible:outline-2 focus-visible:outline-green2"
    >
      {t.nav.resume}
    </a>
  )

  return (
    <div className="relative pointer-events-auto w-[94%] min-[1200px]:w-[calc(100%-240px)] min-[1200px]:max-w-6xl z-100">
      <div className="h-16 min-[1200px]:h-20 rounded-2xl glass flex items-center justify-between px-5 min-[1200px]:px-8">
        <div className="flex items-baseline gap-2">
          <p className="text-text1 text-[26px] min-[1200px]:text-[30px] font-bold hover:animate-pulse">Bryant</p>
          <PuntoPulso />
        </div>

        <div className="hidden min-[1200px]:flex items-center gap-1">
          {navBarItems.map((item) => (
            <ItemNavBar
              key={item}
              id={item}
              label={t.nav[item]}
              isSelected={title === item}
              setTitle={selectItem} />
          ))}
        </div>

        <div className="hidden min-[1200px]:block">
          {resumeLink}
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          className="min-[1200px]:hidden p-2 -mr-2 text-text1 cursor-pointer focus-visible:outline-2 focus-visible:outline-green2 rounded-lg"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" viewBox="0 0 24 24">
            {open
              ? <path d="M6 6l12 12M18 6L6 18" />
              : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="min-[1200px]:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl glass p-5 flex flex-col items-center gap-3">
          {navBarItems.map((item) => (
            <ItemNavBar
              key={item}
              layoutId="activeTabMobile"
              id={item}
              label={t.nav[item]}
              isSelected={title === item}
              setTitle={selectItem} />
          ))}
          {resumeLink}
        </div>
      )}
    </div>
  )
}
