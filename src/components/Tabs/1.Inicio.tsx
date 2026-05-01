import { motion } from 'framer-motion'

export default function Inicio() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden h-screen">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }} // Un poco de transparencia para que no sea tan fuerte
        transition={{ duration: 6 }}
        className="absolute -top-10 -z-10 w-150 h-150 rounded-full bg-[radial-gradient(circle,var(--color-green3)_0%,transparent_60%)] animate-pulse blur-3xl"
      />

      {/* 2. El Contenedor con el "Saltito Suave" */}
      <motion.div
        // Estado inicial: un poco abajo (y: 40) y ligeramente más pequeño
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        // Estado final: posición original
        animate={{ opacity: 1, y: 0, scale: 1 }}
        // Configuración de Spring (física de resorte)
        transition={{
          type: 'tween',
          stiffness: 200,
          damping: 15,    // Bajé un poco el damping para que el rebote sea más notorio y "suave"
          delay: 0.2      // Un pequeño retraso para que no sea tan brusco al cargar
        }}
        className="relative z-10 flex flex-col items-center justify-center -top-15"
      >
        <p className="text-gray3 font-bold tracking-widest uppercase mb-2">
          Hola, soy
        </p>

        <h1 className="text-text1 text-7xl md:text-8xl text-center font-black leading-tight">
          Bryant Tejeda
        </h1>

        <a href="https://roadmap.sh/full-stack" target="_blank"
          className="mt-4 px-4 py-1 border-[5px] animate-pulse font-black bg-white border-green3 rounded-full text-green3">
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