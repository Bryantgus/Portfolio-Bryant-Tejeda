import { motion } from "framer-motion"

type Props = {
  title: string
  isSelected: boolean
  setTitle: (title: string) => void
}

export default function ItemNavBar({ title, isSelected, setTitle }: Props) {
  return (
    <button 
      onClick={() => setTitle(title)}
      className="relative px-2 py-1 text-[15px] font-semibold cursor-pointer transition-colors duration-300 z-10"
    >
      <span className={`${isSelected ? 'text-text1' : 'text-gray1'} relative z-20 hover:animate-pulse`}>
        {title}
      </span>


      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-green1 border border-green2 rounded-xl z-0"
          transition={{ type: "spring", bounce: 0.2, duration: 2 }}
        />
      )}
    </button>
  )
}