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
        <p className="text-gray1 text-lg sm:text-xl font-bold tracking-widest uppercase mb-2 text-center">
          {t.home.greeting}
        </p>

        <h1 className="bg-linear-to-b from-white to-green-200 bg-clip-text text-transparent text-5xl sm:text-7xl md:text-8xl text-center font-black leading-tight">
          Bryant Tejeda
        </h1>

        <a href="https://roadmap.sh/full-stack" target="_blank" rel="noopener noreferrer"
          className="glass-green mt-5 px-6 py-2 text-lg sm:text-xl text-center font-black rounded-full text-white transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-green2">
          Full Stack Developer
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#proyectos"
            className="glass-green px-8 py-3 text-lg rounded-xl text-white font-semibold transition hover:-translate-y-0.5 hover:border-green2 focus-visible:outline-2 focus-visible:outline-green2"
          >
            {t.home.cta.projects}
          </a>
          <a
            href="#contacto"
            className="glass px-8 py-3 text-lg rounded-xl text-text1 font-semibold transition hover:-translate-y-0.5 hover:border-green2/60 focus-visible:outline-2 focus-visible:outline-green2"
          >
            {t.home.cta.contact}
          </a>
        </div>
      </motion.div>

      <div className="w-full h-[40vh] absolute
      bg-[radial-gradient(ellipse_at_top,var(--color-green1)_0%,transparent_80%)]
      opacity-30 blur-3xl">
      </div>

    </div>
  )
}
