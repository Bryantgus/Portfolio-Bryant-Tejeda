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
      aria-current={isSelected ? 'true' : undefined}
      className="relative px-3 min-[1360px]:px-4 py-2 text-[17px] font-semibold cursor-pointer transition-colors duration-300 z-10 rounded-xl focus-visible:outline-2 focus-visible:outline-green2"
    >
      <span className={`${isSelected ? 'text-text1' : 'text-gray1'} relative z-20 hover:animate-pulse`}>
        {label}
      </span>


      {isSelected && (
        <motion.div
          layoutId={layoutId}
          className="absolute inset-0 bg-green2/15 border border-green2/70 shadow-[0_0_16px_rgba(72,255,84,0.25)] backdrop-blur rounded-xl z-0"
          transition={{ type: "spring", bounce: 0.2, duration: 2 }}
        />
      )}
    </button>
  )
}
