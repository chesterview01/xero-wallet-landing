import { motion } from "framer-motion";

const XeroHeroTitle = () => {
  // Subtle floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 400,
    y: (Math.random() - 0.5) * 200,
    size: 4 + Math.random() * 8,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 2,
  }));

  // Energy lines
  const energyLines = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    width: 100 + Math.random() * 200,
    y: -40 + i * 20,
    delay: i * 0.3,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="relative flex flex-col items-center justify-center mb-12">
      {/* Energy lines behind text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {energyLines.map((line) => (
          <motion.div
            key={line.id}
            className="absolute h-[1px] rounded-full"
            style={{
              width: line.width,
              top: `calc(50% + ${line.y}px)`,
              background: "linear-gradient(90deg, transparent, rgba(64, 224, 208, 0.4), transparent)",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: [0, 1, 1, 0],
              opacity: [0, 0.6, 0.6, 0],
              x: [-100, 0, 0, 100],
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `calc(50% + ${particle.x}px)`,
              top: `calc(50% + ${particle.y}px)`,
              width: particle.size,
              height: particle.size,
              background: "radial-gradient(circle, rgba(64, 224, 208, 0.3) 0%, transparent 70%)",
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Ambient glow */}
      <motion.div
        className="absolute w-96 h-40 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(ellipse, rgba(64, 224, 208, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main "Xero" text */}
      <motion.h1
        className="text-6xl md:text-7xl lg:text-8xl font-display font-extrabold relative z-10 tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="inline-block bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(135deg, #40E0D0 0%, #00CED1 50%, #40E0D0 100%)",
            backgroundSize: "200% auto",
          }}
          animate={{
            backgroundPosition: ["0% center", "200% center"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          X
        </motion.span>
        <motion.span
          className="inline-block bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(135deg, #001F3F 0%, #003366 50%, #001F3F 100%)",
            backgroundSize: "200% auto",
            filter: "drop-shadow(0 0 20px rgba(0, 31, 63, 0.3))",
          }}
          animate={{
            backgroundPosition: ["0% center", "200% center"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ero
        </motion.span>
      </motion.h1>

      {/* Elegant mirror reflection */}
      <motion.div
        className="relative h-12 md:h-16 lg:h-20 overflow-hidden mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div
          className="text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight"
          style={{
            transform: "scaleY(-1)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 60%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 60%)",
            filter: "blur(1px)",
          }}
        >
          <span
            className="inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #40E0D0 0%, #00CED1 100%)",
            }}
          >
            X
          </span>
          <span
            className="inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #001F3F 0%, #003366 100%)",
            }}
          >
            ero
          </span>
        </div>
      </motion.div>

      {/* Subtle horizontal line accent */}
      <motion.div
        className="w-24 h-[2px] mt-6 rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, #40E0D0, transparent)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
    </div>
  );
};

export default XeroHeroTitle;
