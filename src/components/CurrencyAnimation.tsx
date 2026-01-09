import { motion } from "framer-motion";

const CurrencyAnimation = () => {
  return (
    <div className="relative flex items-center justify-center py-12">
      {/* Central exchange icon */}
      <div className="absolute z-10 w-16 h-16 rounded-full bg-gradient-to-br from-xero-turquoise to-xero-navy flex items-center justify-center shadow-glow">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="text-white text-2xl"
        >
          ⇄
        </motion.div>
      </div>

      {/* USDX coin - left side */}
      <motion.div
        className="relative"
        initial={{ x: 0 }}
        animate={{ x: [-60, 0, -60] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-xero-turquoise to-xero-turquoise-light flex items-center justify-center shadow-button"
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 20px hsl(174 72% 56% / 0.4)",
              "0 0 40px hsl(174 72% 56% / 0.6)",
              "0 0 20px hsl(174 72% 56% / 0.4)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-center">
            <span className="text-xero-navy font-display font-bold text-lg">USDX</span>
            <div className="text-xero-navy/70 text-xs">Dólar digital</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated arrows */}
      <div className="mx-8 flex flex-col gap-2">
        <motion.div
          animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-xero-turquoise text-2xl"
        >
          →
        </motion.div>
        <motion.div
          animate={{ x: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="text-xero-navy text-2xl"
        >
          ←
        </motion.div>
      </div>

      {/* Bs coin - right side */}
      <motion.div
        className="relative"
        initial={{ x: 0 }}
        animate={{ x: [60, 0, 60] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-xero-navy to-xero-navy-light flex items-center justify-center shadow-card"
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 20px hsl(210 100% 12% / 0.4)",
              "0 0 40px hsl(210 100% 12% / 0.6)",
              "0 0 20px hsl(210 100% 12% / 0.4)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="text-center">
            <span className="text-white font-display font-bold text-lg">Bs</span>
            <div className="text-white/70 text-xs">Bolívares</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-xero-turquoise/40"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default CurrencyAnimation;
