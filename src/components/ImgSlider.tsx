import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../i18n/useLang";
import me from '../assets/me.webp'
import me1 from '../assets/me1.webp'
import me3 from '../assets/me3.webp'

const images = [
  me, me1, me3
];

export default function ImageSlider() {
  const { t } = useLang()
  const [index, setIndex] = useState(0);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="relative w-full max-w-4xl h-96 sm:h-120 lg:h-136 overflow-hidden rounded-3xl bg-gray2 border border-white/20 shadow-2xl">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Fondo: la misma foto desenfocada rellena los costados sin recortar la foto real */}
          <img
            src={images[index]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60"
          />
          {/* object-contain: la foto se ve completa, sin recortes */}
          <img
            src={images[index]}
            alt={t.about.photoAlt}
            loading="lazy"
            decoding="async"
            className="relative w-full h-full object-contain"
          />
        </motion.div>
      </AnimatePresence>

      <div className="glass absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20 rounded-full px-4 py-2.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`${t.about.goToPhoto} ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            className="relative h-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-green2"
            style={{ width: i === index ? "40px" : "15px" }}
          >

            <div className="absolute inset-0 bg-white/30" />


            {i === index && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute inset-0 bg-green1"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
