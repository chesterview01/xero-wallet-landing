import { DollarSign, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: DollarSign,
    title: 'Compra y venta directa contra BCV',
    description: 'Opera con la tasa oficial del Banco Central de Venezuela. Transparencia total en cada transacción.',
  },
  {
    icon: Shield,
    title: 'Seguridad y transparencia',
    description: 'Tu dinero está protegido con los más altos estándares de seguridad. Sin sorpresas ni costos ocultos.',
  },
  {
    icon: Zap,
    title: 'Operaciones rápidas y comisiones bajas',
    description: 'Transacciones instantáneas con las comisiones más competitivas del mercado.',
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

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-xero-turquoise via-xero-navy to-xero-turquoise" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-xero-turquoise/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-xero-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-xero-turquoise/10 text-xero-turquoise text-sm font-medium mb-4">
            Ventaja Xero
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            ¿Por qué elegir{' '}
            <span className="text-xero-turquoise">Xero Wallet</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            La forma más fácil y segura de operar con USDX en Venezuela.
            Compra, vende y protege tu dinero con la tasa BCV.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-xero-turquoise/50 hover-lift glass-card text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-xero-turquoise/20 to-xero-navy/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-xero-turquoise" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-xero-turquoise transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
