import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AmbientBackgroundProps {
  children: React.ReactNode;
}

const AmbientBackground: React.FC<AmbientBackgroundProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax for the background layer
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Define colors for the beams
  const colors = ['#06b6d4', '#8b5cf6']; // Cyan and Violet

  // Generate a fixed number of beams with random initial properties
  const beamCount = 6;
  const [beams, setBeams] = useState<Array<{
    id: number;
    color: string;
    width: number;
    height: number;
    initialX: number;
    initialY: number;
    duration: number;
    delay: number;
    xOffset: number[];
    yOffset: number[];
    scale: number[];
  }>>([]);

  useEffect(() => {
    const newBeams = Array.from({ length: beamCount }).map((_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      width: Math.random() * 300 + 100, // 100-400px
      height: Math.random() * 300 + 100, // 100-400px
      initialX: Math.random() * 100, // 0-100%
      initialY: Math.random() * 100, // 0-100%
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      xOffset: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
      yOffset: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
      scale: [1, 1.2, 1],
    }));
    setBeams(newBeams);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-[#050505]">
      {/* Background Layer with Beams */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        {beams.map((beam) => (
          <motion.div
            key={beam.id}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              backgroundColor: beam.color,
              width: beam.width,
              height: beam.height,
              top: `${beam.initialY}%`,
              left: `${beam.initialX}%`,
              willChange: 'transform',
            }}
            animate={{
              x: beam.xOffset,
              y: beam.yOffset,
              opacity: [0.1, 0.3, 0.1],
              scale: beam.scale,
            }}
            transition={{
              duration: beam.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: beam.delay,
            }}
          />
        ))}
        {/* Overlay to ensure deep black feel if needed, or just let the bg color handle it */}
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default AmbientBackground;
