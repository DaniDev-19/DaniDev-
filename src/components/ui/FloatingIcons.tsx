"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Lista editable de iconos
const techIcons = [
  "https://cdn.simpleicons.org/react/61DAFB",
  "https://cdn.simpleicons.org/nextdotjs/white",
  "https://cdn.simpleicons.org/typescript/3178C6",
  "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "https://cdn.simpleicons.org/nodedotjs/339933",
  "https://cdn.simpleicons.org/postgresql/4169E1",
  "https://cdn.simpleicons.org/docker/2496ED",
  "https://cdn.simpleicons.org/git/F05032",
  "https://cdn.simpleicons.org/figma/F24E1E",
  "https://cdn.simpleicons.org/python/3776AB",
  "https://cdn.simpleicons.org/javascript/F7DF1E",
  "https://cdn.simpleicons.org/html5/E34F26",
  "https://cdn.simpleicons.org/css3/1572B6",
  "https://cdn.simpleicons.org/sass/CC6699",
  "https://cdn.simpleicons.org/mysql/4479A1",
  "https://cdn.simpleicons.org/mongodb/47A248",
  "https://cdn.simpleicons.org/amazonaws/232F3E",
  "https://cdn.simpleicons.org/vercel/white",
];

export function FloatingIcons() {
  const [icons, setIcons] = useState<
    {
      src: string;
      x: number;
      y: number;
      duration: number;
      delay: number;
      scale: number;
    }[]
  >([]);

  useEffect(() => {
    // Generar posiciones aleatorias
    const generatedIcons = techIcons.map((src) => ({
      src,
      x: Math.random() * 90 + 5, // Margen horizontal
      y: Math.random() * 60 + 20, // Margen vertical seguro (20% a 80% del contenedor)
      duration: 15 + Math.random() * 15, // Duración lenta para flotación
      delay: Math.random() * 5,
      scale: 0.8 + Math.random() * 0.5,
    }));
    setIcons(generatedIcons);
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-0 h-[300px] z-0 overflow-hidden pointer-events-none select-none">
      {/* Gradiente sutil para integrar */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0" />

      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 md:w-24 md:h-24 pointer-events-auto"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
          }}
          // Animación del contenedor padre (Solo flotación espacial)
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: icon.delay,
          }}
        >
          {/* Animación del hijo (Interacción: Hover, Drag, Tap) */}
          <motion.div
            className="w-full h-full flex items-center justify-center p-2 cursor-grab active:cursor-grabbing"
            animate={{
              rotate: [0, 10, -10, 0], // Rotación suave independiente
            }}
            transition={{
              duration: icon.duration * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2, rotate: 0, zIndex: 50 }}
            whileTap={{ scale: 0.9 }}
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
          >
            {}
            <img
              src={icon.src}
              alt="Tech Icon"
              className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
