import { useState } from "react";
import ItemNavBar from "./ItemNavBar"
import PuntoPulso from "./PuntoPulso";

type Props = {
  title: string;
  setTitle: (title: string) => void
}

const navBarItems = [
  'Inicio', 'Sobre mi', 'Proyectos', 'Habilidades', 'Contacto'
]

export default function NavBar({ title, setTitle }: Props) {
  const [open, setOpen] = useState(false)

  const selectItem = (item: string) => {
    setTitle(item)
    setOpen(false)
  }

  const openResume = () => window.open('cvbt.pdf', '_blank')

  return (
    <div className="relative pointer-events-auto w-[92%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] z-100">
      <div className="h-15 rounded-xl bg-gray2 border border-gray3 flex items-center px-5 justify-between lg:justify-center">
        <div className="flex items-baseline gap-2">
          <p className="text-text1 text-[24px] font-bold hover:animate-pulse">Bryant</p>
          <PuntoPulso />
        </div>

        <div className="hidden lg:flex w-full items-center justify-evenly gap-2">
          {navBarItems.map((item: string) => (
            <ItemNavBar
              key={item}
              title={item}
              isSelected={title === item}
              setTitle={selectItem} />
          ))}
          <button
            onClick={openResume}
            className="text-green2 rounded-xl px-4 border-green2 border py-1 animate-pulse cursor-pointer"
          >
            Resume
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="lg:hidden p-2 -mr-2 text-text1 cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" viewBox="0 0 24 24">
            {open
              ? <path d="M6 6l12 12M18 6L6 18" />
              : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 rounded-xl bg-gray2 border border-gray3 p-4 flex flex-col items-center gap-3">
          {navBarItems.map((item: string) => (
            <ItemNavBar
              key={item}
              layoutId="activeTabMobile"
              title={item}
              isSelected={title === item}
              setTitle={selectItem} />
          ))}
          <button
            onClick={openResume}
            className="text-green2 rounded-xl px-4 border-green2 border py-1 animate-pulse cursor-pointer"
          >
            Resume
          </button>
        </div>
      )}
    </div>
  )
}
