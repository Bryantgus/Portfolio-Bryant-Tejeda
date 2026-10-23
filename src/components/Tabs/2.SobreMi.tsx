import ImgSlider from "../ImgSlider";
import PuntoPulso from "../PuntoPulso";

export default function SobreMi() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-25 pb-16 px-5">

      <div className="flex items-baseline gap-2 mb-2">
        <h2 className="text-text1 text-4xl sm:text-5xl font-bold tracking-tight mt-10">
          Sobre Mi
        </h2>
        <PuntoPulso />
      </div>

      <div className=" text-gray3 text-lg mb-5">
        <p className="font-semibold text-gray1">
          Conóceme mejor
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-6xl gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 shrink-0">
          <ImgSlider />
        </div>

        <div className="text-gray1 text-base sm:text-[18px] font-semibold">
          <p>Soy un desarrollador apasionado por crear aplicaciones web y móviles modernas, funcionales y bien diseñadas. Trabajo principalmente con <strong>React</strong>, <strong>TypeScript</strong>, <strong>React Native</strong> y <strong>Node.js</strong>, y disfruto construir soluciones donde la experiencia del usuario y la lógica del sistema tengan el mismo nivel de importancia.
<br /><br />
Me gusta ir más allá de simplemente hacer que una funcionalidad trabaje: <strong>disfruto entender la lógica detrás de cada problema</strong>, optimizar procesos y diseñar aplicaciones escalables y mantenibles. Siempre estoy aprendiendo nuevas herramientas y mejores prácticas para seguir creciendo como desarrollador <strong>Full Stack</strong> y construir productos de calidad.</p>
        </div>
      </div>

    </div>
  )
}