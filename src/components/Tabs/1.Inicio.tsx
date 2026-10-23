import { motion } from 'framer-motion'
import { useLang } from '../../i18n/useLang'

export default function Inicio() {
  const { t } = useLang()

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 pt-20">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 6 }}
        className="absolute -top-10 -z-10 w-80 h-80 sm:w-150 sm:h-150 rounded-full bg-[radial-gradient(circle,var(--color-green3)_0%,transparent_60%)] animate-pulse blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: 'keyframes',
          stiffness: 200,
          damping: 35,
          delay: 0.5
        }}
        className="relative z-10 flex flex-col items-center justify-center sm:-top-15"
      >
        <p className="text-gray3 font-bold tracking-widest uppercase mb-2 text-center">
          {t.home.greeting}
        </p>

        <h1 className="text-text1 text-5xl sm:text-7xl md:text-8xl text-center font-black leading-tight">
          Bryant Tejeda
        </h1>

        <a href="https://roadmap.sh/full-stack" target="_blank"
          className="mt-4 px-4 py-1 text-center border-[5px] animate-pulse font-black bg-white border-green3 rounded-full text-green3">
          Full Stack Developer
        </a>
      </motion.div>

      <div className="w-full h-[40vh] absolute
      bg-[radial-gradient(ellipse_at_top,var(--color-green1)_0%,transparent_80%)] 
      opacity-30 blur-3xl">
      </div>

    </div>
  )
}