import ItemNavBar from "./ItemNavBar"
import PuntoPulso from "./PuntoPulso";

type Props = {
  title: string;
  setTitle: (title: string) => void
}

const navBarItems = [
  'Inicio', 'Sobre mi', 'Proyectos', 'Habilidades', 'Experiencia', 'Contacto'
]

export default function NavBar({ title, setTitle }: Props) {


  return (
    <div className="w-[60%] h-15 rounded-xl bg-gray2 border border-gray3 flex items-center px-5 justify-center z-100">
      <div className="flex items-baseline gap-2">
        <p className="text-text1 text-[24px] font-bold hover:animate-pulse">Bryant</p>
        <PuntoPulso />
      </div>

      <div className="flex w-full items-center justify-evenly gap-2">

        {navBarItems.map((item: string, index: number) => (
          <ItemNavBar
            key={index}
            title={item}
            isSelected={title === item}
            setTitle={setTitle} />
        ))}
        <button
          onClick={() => window.open('cvbt.pdf', '_blank')}
          className="text-green2 rounded-xl px-4 border-green2 border py-1 animate-pulse cursor-pointer"
        >
          Resume
        </button>
      </div>
    </div>
  )
}