import { motion } from "framer-motion";
import { TrendingUp, Shield, DollarSign } from "lucide-react";

const WhatIsUSDXSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-xero-turquoise via-xero-navy to-xero-turquoise" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-xero-turquoise/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-xero-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-xero-turquoise/10 text-xero-turquoise text-sm font-medium mb-4">
              <DollarSign className="w-4 h-4" />
              Stablecoin
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              ¿Qué es{" "}
              <span className="text-xero-turquoise">USDX</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              USDX es una <strong className="text-foreground">stablecoin</strong>, similar a USDT, 
              diseñada para mantener su valor estable frente al dólar estadounidense. 
              Con Xero Wallet puedes proteger tu dinero de la inflación y hacer transacciones 
              seguras en todo momento.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A diferencia del bolívar, que pierde valor constantemente, 1 USDX siempre equivale 
              a aproximadamente 1 USD. Esto te permite conservar tu poder adquisitivo sin 
              preocuparte por la devaluación.
            </p>
          </motion.div>

          {/* Visual / Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-xero-navy via-xero-navy-light to-xero-navy border border-white/10 relative overflow-hidden">
              {/* Glow effects */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-xero-turquoise/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-xero-turquoise/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              {/* USDX Icon */}
              <motion.div
                className="relative z-10 w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-xero-turquoise to-xero-turquoise/70 flex items-center justify-center shadow-[0_0_40px_rgba(64,224,208,0.4)]"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(64,224,208,0.4)",
                    "0 0 60px rgba(64,224,208,0.6)",
                    "0 0 40px rgba(64,224,208,0.4)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xero-navy font-display font-bold text-3xl">$</span>
              </motion.div>

              {/* Stability Chart Representation */}
              <div className="relative z-10 text-center mb-8">
                <h3 className="text-white text-2xl font-display font-bold mb-2">
                  Estabilidad Garantizada
                </h3>
                <p className="text-white/60">
                  1 USDX ≈ 1 USD
                </p>
              </div>

              {/* Stats */}
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                  <TrendingUp className="w-6 h-6 text-xero-turquoise mx-auto mb-2" />
                  <div className="text-white font-display font-bold text-xl">Estable</div>
                  <div className="text-white/50 text-sm">Sin volatilidad</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                  <Shield className="w-6 h-6 text-xero-turquoise mx-auto mb-2" />
                  <div className="text-white font-display font-bold text-xl">Seguro</div>
                  <div className="text-white/50 text-sm">100% respaldado</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsUSDXSection;
