import github from '../assets/githubLogo.svg'
import live from '../assets/live.png'

type Props = {
  title: string
  img: string
  description: string
  tecnologias: string[]
  liveUrl: string
  githubUrl: string
}

const linkClass = 'glass flex items-center gap-2 px-5 py-2.5 rounded-xl cursor-pointer transition hover:border-green2/60 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-green2'

export default function ProjectItem({ title, img, description, tecnologias, liveUrl, githubUrl }: Props) {
  return (
    <div className="w-full h-full flex flex-col glass rounded-3xl p-4 sm:p-5 transition duration-300 hover:scale-[1.02] hover:border-green2/60">
      <img
        src={img}
        alt={title}
        width={900}
        height={430}
        loading="lazy"
        decoding="async"
        className="w-full h-52 sm:h-64 object-cover rounded-2xl border border-white/10"
      />

      <div className="px-2 sm:px-3 pt-5 pb-2 flex flex-col flex-1">
        <p className="text-text1 font-extrabold text-2xl sm:text-3xl mb-3">{title}</p>
        <p className="text-gray1 font-medium text-base sm:text-lg leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4 mb-5">
          {tecnologias.map((item: string) => {
            return (
              <div className="glass-chip px-4 py-0.5 rounded-xl w-fit text-green-200 font-semibold text-[15px] text-center"
                key={item}>
                {item}
              </div>
            )
          })}
        </div>

        {(liveUrl !== "" || githubUrl !== "") &&
          <div className='flex flex-wrap gap-3 font-semibold text-white text-lg mt-auto pt-5 border-t border-white/15'>
            {liveUrl !== "" &&
              <a href={liveUrl} target='_blank' rel='noopener noreferrer' className={linkClass}>
                <img src={live} className='w-6 h-7 object-contain' alt="" />
                <p>Live</p>
              </a>
            }

            {githubUrl !== "" &&
              <a href={githubUrl} target='_blank' rel='noopener noreferrer' className={linkClass}>
                <img src={github} className='w-6 h-6' alt="" />
                <p>Github</p>
              </a>
            }
          </div>
        }
      </div>
    </div>
  )
}
