import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import me from '../assets/me.jpg'
import me1 from '../assets/me1.jpg'
import me3 from '../assets/me3.jpg'

const images = [
  me, me1, me3
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="relative w-full max-w-4xl h-105 overflow-hidden rounded-3xl bg-gray2 border border-gray3 shadow-2xl">
      
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />


      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative h-2 rounded-full overflow-hidden transition-all duration-300"
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