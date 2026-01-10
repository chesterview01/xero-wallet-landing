import { UserPlus, DollarSign, ArrowRightLeft, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Regístrate en Xero Wallet',
    description: 'Crea tu cuenta en minutos. Solo necesitas tu correo electrónico y un número de teléfono.',
  },
  {
    number: '02',
    icon: DollarSign,
    title: 'Compra USDX con bolívares',
    description: 'Transfiere bolívares y recibe USDX al instante con la tasa oficial del BCV.',
  },
  {
    number: '03',
    icon: ArrowRightLeft,
    title: 'Usa USDX o véndelo en P2P',
    description: 'Envía pagos, ahorra en dólares digitales o intercambia en el mercado P2P.',
  },
  {
    number: '04',
    icon: Wallet,
    title: 'Retira tus fondos',
    description: 'Cuando lo necesites, convierte tu USDX a bolívares y recíbelos en tu cuenta bancaria.',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const HowItWorksSection = () => {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-xero-turquoise/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xero-turquoise text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">
            Cómo funciona
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Empieza en{' '}
            <span className="text-xero-turquoise">4 simples pasos</span>
          </h2>
          <p className="text-white/70 text-lg">
            Proteger tu dinero nunca fue tan fácil. Sigue estos pasos y comienza a operar con USDX.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connector line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-xero-turquoise/50 to-transparent z-0" />
              )}
              
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-xero-turquoise/50 hover:bg-white/10 transition-all duration-300 hover-lift h-full">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-xero-turquoise flex items-center justify-center text-xero-navy font-display font-bold text-lg shadow-button">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-xero-turquoise/30 to-xero-navy/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-xero-turquoise" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
