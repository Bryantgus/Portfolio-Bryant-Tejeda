import { useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from "react"
import ProjectItem from "../ProjectItem";
import PuntoPulso from "../PuntoPulso";
import { useLang } from "../../i18n/useLang";
import projects, { type ProjectInfo } from '../../data/projects.ts'

const SWIPE_THRESHOLD = 50

const getItemsPerView = () => {
  // 2 proyectos a la vez; solo en movil se muestra 1
  if (window.innerWidth >= 640) return 2
  return 1
}

const arrowButtonClass = "glass cursor-pointer absolute top-1/2 -translate-y-1/2 z-50 p-1.5 sm:p-2 rounded-full text-white hover:border-green2 transition focus-visible:outline-2 focus-visible:outline-green2"

export default function Proyectos() {
  const { t } = useLang()

  const [rawIndex, setIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const onResize = () => setItemsPerView(getItemsPerView())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const maxIndex = Math.floor((projects.length - 1) / itemsPerView) * itemsPerView
  // Al cambiar itemsPerView el indice guardado puede quedar desalineado con las paginas
  const index = Math.min(Math.floor(rawIndex / itemsPerView) * itemsPerView, maxIndex)
  const showNext = index < maxIndex
  const pages = Math.ceil(projects.length / itemsPerView)
  const currentPage = index / itemsPerView

  const next = () => {
    if (index + itemsPerView < projects.length) {
      setIndex(index + itemsPerView)
    }
  }

  const prev = () => {
    if (index - itemsPerView >= 0) {
      setIndex(index - itemsPerView)
    }
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (deltaX < -SWIPE_THRESHOLD) next()
    else if (deltaX > SWIPE_THRESHOLD) prev()
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-25 pb-16 relative">

      <div className="flex items-baseline gap-2 mb-10">
        <h2 className="text-text1 text-5xl sm:text-6xl font-bold tracking-tight mt-9">
          {t.projects.title}
        </h2>
        <PuntoPulso />
      </div>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={t.projects.title}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="relative max-w-7xl w-full sm:px-14 focus-visible:outline-2 focus-visible:outline-green2 rounded-xl"
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(index * 100) / itemsPerView}%)`
            }}
          >
            {projects.map((item: ProjectInfo, i: number) => {
              const visible = i >= index && i < index + itemsPerView
              return (
                // inert: las tarjetas fuera de vista no reciben foco con el teclado
                <div key={item.id} inert={!visible} className="shrink-0 p-3" style={{ width: `${100 / itemsPerView}%` }}>
                  <ProjectItem
                    title={t.projects.items[item.id].title}
                    img={item.img}
                    description={t.projects.items[item.id].description}
                    tecnologias={item.tecnologias}
                    liveUrl={item.liveUrl}
                    githubUrl={item.githubUrl}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {index !== 0 &&
          <button
            onClick={prev}
            aria-label={t.projects.prev}
            className={`${arrowButtonClass} left-1 sm:left-2`}
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        }

        {showNext &&
          <button
            onClick={next}
            aria-label={t.projects.next}
            className={`${arrowButtonClass} right-1 sm:right-2`}
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        }
      </div>

      {pages > 1 &&
        <div className="flex gap-2 mt-6">
          {Array.from({ length: pages }, (_, page) => (
            <button
              key={page}
              onClick={() => setIndex(page * itemsPerView)}
              aria-label={`${t.projects.goToPage} ${page + 1}`}
              aria-current={page === currentPage ? 'true' : undefined}
              className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 focus-visible:outline-2 focus-visible:outline-green2 ${page === currentPage ? 'w-7 bg-green2' : 'w-2.5 bg-gray3 hover:bg-gray1'}`}
            />
          ))}
        </div>
      }
    </div>
  )
}
