import PuntoPulso from "../PuntoPulso";

export default function Contacto() {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-25">

      <div className="flex items-baseline gap-2 mb-10">
        <h2 className="text-text1 text-5xl font-bold tracking-tight mt-10">
          Contacto
        </h2>
        <PuntoPulso />
      </div>

      {/* Contenido adicional (Bio, foto, etc.) */}
      <div className="max-w-3xl text-gray3 text-lg text-center px-5">
        <p>
          Aquí puedes escribir tu historia, tecnologías que dominas
          o lo que te apasiona del desarrollo.
        </p>
      </div>

    </div>

  )
}
