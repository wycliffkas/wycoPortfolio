import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Line {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  duration: number;
}

export function AnimatedBackground() {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    // Generate random animated lines
    const generateLines = () => {
      const newLines: Line[] = [];
      for (let i = 0; i < 15; i++) {
        newLines.push({
          id: i,
          x1: Math.random() * 100,
          y1: Math.random() * 100,
          x2: Math.random() * 100,
          y2: Math.random() * 100,
          duration: 10 + Math.random() * 20,
        });
      }
      setLines(newLines);
    };

    generateLines();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-to-br from-[#ff6b9d]/20 to-[#7f5af0]/15 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#4ecdc4]/15 to-[#2cb67d]/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#ffa94d]/10 to-[#7f5af0]/15 rounded-full blur-3xl"
      />

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b9d" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#7f5af0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4ecdc4" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2cb67d" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ffa94d" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7f5af0" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {lines.map((line, index) => (
          <motion.line
            key={line.id}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke={index % 2 === 0 ? 'url(#lineGradient1)' : 'url(#lineGradient2)'}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
              x1: [`${line.x1}%`, `${line.x2}%`, `${line.x1}%`],
              y1: [`${line.y1}%`, `${line.y2}%`, `${line.y1}%`],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </svg>

      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => {
        const colors = ['#ff6b9d', '#7f5af0', '#2cb67d', '#4ecdc4', '#ffa94d'];
        const randomColor = colors[i % colors.length];
        const size = Math.random() > 0.5 ? 'w-1.5 h-1.5' : 'w-1 h-1';

        return (
          <motion.div
            key={i}
            className={`absolute ${size} rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: randomColor,
              boxShadow: `0 0 10px ${randomColor}40`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
}
