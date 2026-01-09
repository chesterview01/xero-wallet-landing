import { motion } from "framer-motion";

const XeroHeroTitle = () => {
  // Lightning bolt positions
  const lightningBolts = [
    { x: -120, y: -20, rotation: -15, delay: 0 },
    { x: 120, y: -30, rotation: 15, delay: 0.3 },
    { x: -80, y: 40, rotation: -25, delay: 0.6 },
    { x: 100, y: 50, rotation: 20, delay: 0.9 },
  ];

  // Falling money items
  const moneyItems = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100 - 50,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
    symbol: i % 3 === 0 ? "💵" : i % 3 === 1 ? "💰" : "🪙",
    size: 16 + Math.random() * 12,
  }));

  return (
    <div className="relative flex flex-col items-center justify-center mb-8">
      {/* Lightning bolts */}
      {lightningBolts.map((bolt, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{
            left: `calc(50% + ${bolt.x}px)`,
            top: `calc(50% + ${bolt.y}px)`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.2, 1, 0.8],
          }}
          transition={{
            duration: 0.8,
            delay: bolt.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <svg
            width="40"
            height="60"
            viewBox="0 0 40 60"
            fill="none"
            style={{ transform: `rotate(${bolt.rotation}deg)` }}
          >
            <motion.path
              d="M20 0L25 22H40L22 35L28 60L10 40L0 45L15 25L5 22L20 0Z"
              fill="url(#lightning-gradient)"
              animate={{
                filter: [
                  "drop-shadow(0 0 5px #40E0D0)",
                  "drop-shadow(0 0 15px #40E0D0)",
                  "drop-shadow(0 0 5px #40E0D0)",
                ],
              }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
            <defs>
              <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#40E0D0" />
                <stop offset="50%" stopColor="#00CED1" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}

      {/* Electric glow behind text */}
      <motion.div
        className="absolute w-80 h-32 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(ellipse, rgba(64, 224, 208, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main XERO text */}
      <motion.h1
        className="text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-transparent bg-clip-text relative z-10"
        style={{
          backgroundImage: "linear-gradient(135deg, #40E0D0 0%, #00CED1 30%, #20B2AA 60%, #40E0D0 100%)",
          backgroundSize: "200% auto",
          textShadow: "0 0 40px rgba(64, 224, 208, 0.5)",
        }}
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          backgroundPosition: ["0% center", "200% center"],
        }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 0.8 },
          scale: { duration: 0.8 },
          backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
        }}
      >
        XERO
      </motion.h1>

      {/* Mirror reflection */}
      <motion.div
        className="relative h-16 md:h-20 lg:h-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1
          className="text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(135deg, #40E0D0 0%, #00CED1 30%, #20B2AA 60%, #40E0D0 100%)",
            transform: "scaleY(-1)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 80%)",
            filter: "blur(2px)",
          }}
        >
          XERO
        </h1>
      </motion.div>

      {/* Falling money animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {moneyItems.map((item) => (
          <motion.div
            key={item.id}
            className="absolute"
            style={{
              left: `calc(50% + ${item.x}%)`,
              fontSize: item.size,
              opacity: 0.6,
            }}
            initial={{ y: -60, opacity: 0, rotate: 0 }}
            animate={{
              y: ["-60px", "300px"],
              opacity: [0, 0.6, 0.6, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      {/* Sparkle effects */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-xero-turquoise"
          style={{
            left: `calc(50% + ${(Math.random() - 0.5) * 200}px)`,
            top: `calc(50% + ${(Math.random() - 0.5) * 100}px)`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.4,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

export default XeroHeroTitle;
