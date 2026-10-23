import { useEffect, useState } from "react"
import ProyectItem from "../ProyectItem";
import PuntoPulso from "../PuntoPulso";
import { useLang } from "../../i18n/useLang";
import proyects, { type ProyectsInfo } from '../../data/proyects.ts'
import githubImg from '../../assets/Github Profile.png'
import porfolio from '../../assets/Porfolio.png'
import desgloseCroquis from '../../assets/DVC.png'
import Task from "../../assets/Task.png"
import Word from "../../assets/Word.png"
import Quiz from "../../assets/Quiz.png"

const imgs: Record<string, string> = {
  'Github Profile': githubImg,
  'Porfolio': porfolio,
  "DCV": desgloseCroquis,
  "Task": Task,
  "Word": Word,
  "Quiz": Quiz,
}

const getItemsPerView = () => {
  if (window.innerWidth >= 1024) return 3
  if (window.innerWidth >= 640) return 2
  return 1
}

export default function Proyectos() {
  const { t } = useLang()

  const [rawIndex, setIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView)

  useEffect(() => {
    const onResize = () => setItemsPerView(getItemsPerView())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const maxIndex = Math.floor((proyects.length - 1) / itemsPerView) * itemsPerView
  // Al cambiar itemsPerView el indice guardado puede quedar desalineado con las paginas
  const index = Math.min(Math.floor(rawIndex / itemsPerView) * itemsPerView, maxIndex)
  const showNext = index < maxIndex
  const next = () => {
    if (index + itemsPerView < proyects.length) {
      setIndex(index + itemsPerView)
    }
  }

  const prev = () => {
    if (index - itemsPerView >= 0) {
      setIndex(index - itemsPerView)
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-20 pb-16 relative">

      <div className="flex items-baseline gap-2 mb-10">
        <h2 className="text-text1 text-4xl sm:text-5xl font-bold tracking-tight mt-9">
          {t.projects.title}
        </h2>
        <PuntoPulso />
      </div>

      <div className="relative max-w-6xl w-full sm:px-14">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(index * 100) / itemsPerView}%)`
            }}
          >
            {proyects.map((item: ProyectsInfo, i: number) => (
              <div key={i} className="shrink-0 p-3" style={{ width: `${100 / itemsPerView}%` }}>
                <ProyectItem
                  title={t.projects.items[item.id].title}
                  img={imgs[item.img]}
                  description={t.projects.items[item.id].description}
                  tecnologias={item.tecnologias}
                  liveUrl={item.liveUrl}
                  githubUrl={item.githubUrl}
                />
              </div>
            ))}
          </div>
        </div>

        {index !== 0 &&
          <button
            onClick={prev}
            className="cursor-pointer absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-50 p-1.5 sm:p-2 bg-black/60 sm:bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition"
          >
            <img
              src="https://unpkg.com/heroicons@2.0.18/24/outline/chevron-left.svg"
              className="w-6 h-6 sm:w-8 sm:h-8 invert opacity-70 hover:opacity-100 transition"
              alt={t.projects.prev}
            />
          </button>
        }

        {showNext &&
          <button
            onClick={next}
            className="cursor-pointer absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-50 p-1.5 sm:p-2 bg-black/60 sm:bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition"
          >
            <img
              src="https://unpkg.com/heroicons@2.0.18/24/outline/chevron-right.svg"
              className="w-6 h-6 sm:w-8 sm:h-8 invert opacity-70 hover:opacity-100 transition"
              alt={t.projects.next}
            />
          </button>
        }
      </div>
    </div>

  )
}