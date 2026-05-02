import ImgSlider from "../ImgSlider";
import PuntoPulso from "../PuntoPulso";

export default function SobreMi() {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-25 my-auto">

      <div className="flex items-baseline gap-2 mb-2">
        <h2 className="text-text1 text-5xl font-bold tracking-tight mt-10">
          Sobre Mi
        </h2>
        <PuntoPulso />
      </div>

      <div className=" text-gray3 text-lg px-5 mb-5">
        <p className="font-semibold text-gray1">
          Conóceme mejor
        </p>
      </div>

      <div className="flex justify-between w-[60%] gap-20">
        <div className="w-500 h-20">
          <ImgSlider />
        </div>

        <div className="text-gray1 text-[18px] font-semibold">
          <p>Soy un desarrollador apasionado por crear aplicaciones web y móviles modernas, funcionales y bien diseñadas. Trabajo principalmente con <strong>React</strong>, <strong>TypeScript</strong>, <strong>React Native</strong> y <strong>Node.js</strong>, y disfruto construir soluciones donde la experiencia del usuario y la lógica del sistema tengan el mismo nivel de importancia.
<br /><br />
Me gusta ir más allá de simplemente hacer que una funcionalidad trabaje: <strong>disfruto entender la lógica detrás de cada problema</strong>, optimizar procesos y diseñar aplicaciones escalables y mantenibles. Siempre estoy aprendiendo nuevas herramientas y mejores prácticas para seguir creciendo como desarrollador <strong>Full Stack</strong> y construir productos de calidad.</p>
        </div>
      </div>

    </div>
  )
}