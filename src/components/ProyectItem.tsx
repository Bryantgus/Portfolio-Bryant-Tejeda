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

export default function ProyectItem({ title, img, description, tecnologias, liveUrl, githubUrl }: Props) {
  return (
    <div className="w-full h-125 border-2 border-gray3 hover:border-green1 rounded-xl transition-transform duration-300 hover:scale-103">
      <img src={img} alt="Image Proyect" className="w-full h-[40%] rounded-t-xl" />

      <div className="p-5">
        <p className="text-text1 font-bold mb-3">{title}</p>
        <p className="w-full text-gray1 font-semibold text-[14px] w-][50%]">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tecnologias.map((item: string, index: number) => {
            return (
              <div className="px-5 bg-green3 rounded-xl p-0.5 w-fit text-green-300 font-bold text-[14px] border border-green-300 text-center "
                key={index}>
                {item}
              </div>
            )
          })}
        </div>
        <div className="w-full h-0.5 mt-3 mb-3 bg-gray3"></div>

        <div className='flex gap-5 font-semibold text-white'>
          {liveUrl !== "" &&
            <a href={liveUrl} target='_blank' className='flex items-center gap-2 cursor-pointer' >
              <img src={live} className='w-6 h-8' alt="Live" />
              <p className='text-white'>Live</p>
            </a>
          }

          {githubUrl !== "" &&
            <a href={githubUrl} target='_blank' className='flex items-center gap-1 cursor-pointer'>
              <img src={github} className='w-6 h-5' alt="Github" />
              <p>Github</p>
            </a>
          }
        </div>
      </div>
    </div>
  )
}
