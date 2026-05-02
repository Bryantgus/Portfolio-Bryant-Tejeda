import { useState } from "react"
import ProyectItem from "../ProyectItem";
import PuntoPulso from "../PuntoPulso";
import proyects, { type ProyectsInfo } from '../../data/proyects.ts'
import githubImg from '../../assets/Github Profile.png'

const imgs: Record<string, string> = {
  'Github Profile': githubImg
}

export default function Proyectos() {

  const [index, setIndex] = useState(0)
  const itemsPerView = 3

  const maxIndex = Math.floor((proyects.length - 1) / itemsPerView) * itemsPerView
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
    <div className="w-full h-screen flex flex-col items-center pt-20 pb-10 relative">

      <div className="flex items-baseline gap-2 mb-10">
        <h2 className="text-text1 text-5xl font-bold tracking-tight mt-9">
          Proyectos
        </h2>
        <PuntoPulso />
      </div>

      <div className="relative max-w-6xl w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(index * 100) / itemsPerView}%)`
          }}
        >
          {proyects.map((item: ProyectsInfo, i: number) => (
            <div key={i} className="min-w-[33.333%] p-3">
              <ProyectItem
                title={item.title}
                img={imgs[item.img]}
                description={item.description}
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
          className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition"
        >
          <img
            src="https://unpkg.com/heroicons@2.0.18/24/outline/chevron-left.svg"
            className="w-8 h-8 invert opacity-70 hover:opacity-100 transition"
          />
        </button>
      }

      {showNext &&
        <button
          onClick={next}
          className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition"
        >
          <img
            src="https://unpkg.com/heroicons@2.0.18/24/outline/chevron-right.svg"
            className="w-8 h-8 invert opacity-70 hover:opacity-100 transition"
          />
        </button>
      }
    </div>

  )
}