import { motion } from "framer-motion";
import { ArrowLeftRight, Shield, Users, Zap, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import CurrencyAnimation from "./CurrencyAnimation";

const benefits = [
  {
    icon: Zap,
    title: "Transacciones rápidas y seguras",
    description: "Intercambia USDX al instante con usuarios verificados.",
  },
  {
    icon: Shield,
    title: "Sistema de disputas",
    description: "Administración de conflictos para mayor confianza.",
  },
  {
    icon: Users,
    title: "Elige tus contrapartes",
    description: "Libertad de negociar precios y condiciones.",
  },
  {
    icon: Wallet,
    title: "Retiros en minutos",
    description: "Recibe bolívares directamente en tu cuenta.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const P2PMarketSection = () => {
  const handleExploreMarket = () => {
    window.open("https://xero.vercel.app/?market=1", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 bg-xero-soft-gray relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-xero-turquoise/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-xero-navy/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-xero-turquoise/10 text-xero-turquoise text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ArrowLeftRight className="w-4 h-4" />
            Mercado P2P
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Intercambia directamente{" "}
            <span className="text-xero-turquoise">entre usuarios</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Xero Wallet incluye un mercado P2P donde puedes comprar y vender USDX de forma segura 
            con otros usuarios en Venezuela.
          </p>
        </motion.div>

        {/* Currency Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <CurrencyAnimation />
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-xero-turquoise/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-xero-turquoise/20 to-xero-navy/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-xero-turquoise" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-xero-turquoise transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="xero" size="xl" onClick={handleExploreMarket} className="group">
            <ArrowLeftRight className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Explorar mercado P2P
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default P2PMarketSection;
