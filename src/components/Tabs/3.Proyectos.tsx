import ProyectItem from "../ProyectItem";
import PuntoPulso from "../PuntoPulso";
import proyects, { type ProyectsInfo } from '../../data/proyects.ts'
import githubImg from '../../assets/Github Profile.png'

const imgs: Record<string, string> = {
  'Github Profile': githubImg
}

export default function Proyectos() {
  return (
    <div className="w-[full] h-screen flex flex-col items-center pt-20 pb-10">

      <div className="flex items-baseline gap-2 mb-10">
        <h2 className="text-text1 text-5xl font-bold tracking-tight mt-9">
          Proyectos
        </h2>
        <PuntoPulso />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 max-w-6xl mx-auto h-full">
        {proyects.map((item: ProyectsInfo, index: number) => {
          return (
            <ProyectItem
              key={index}
              title={item.title}
              img={imgs[item.img]}
              description={item.description}
              tecnologias={item.tecnologias}
              liveUrl={item.liveUrl}
              githubUrl={item.githubUrl}
            />
          )
        })}
      </div>

    </div>
  )
}
