import { motion } from "framer-motion"

type Props = {
  id: string
  label: string
  isSelected: boolean
  layoutId?: string
  setTitle: (title: string) => void
}

export default function ItemNavBar({ id, label, isSelected, setTitle, layoutId = "activeTab" }: Props) {
  return (
    <button 
      onClick={() => setTitle(id)}
      className="relative px-2 py-1 text-[15px] font-semibold cursor-pointer transition-colors duration-300 z-10"
    >
      <span className={`${isSelected ? 'text-text1' : 'text-gray1'} relative z-20 hover:animate-pulse`}>
        {label}
      </span>


      {isSelected && (
        <motion.div
          layoutId={layoutId}
          className="absolute inset-0 bg-green1 border border-green2 rounded-xl z-0"
          transition={{ type: "spring", bounce: 0.2, duration: 2 }}
        />
      )}
    </button>
  )
}