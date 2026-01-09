import { Download, CreditCard, ArrowRightLeft, Settings } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Instala la aplicación',
    description: 'Descarga Xero Wallet en tu dispositivo. Disponible para todos los navegadores modernos como una app instalable.',
  },
  {
    number: '02',
    icon: CreditCard,
    title: 'Recarga tu wallet',
    description: 'Añade fondos a tu wallet convirtiéndolos a USDX. Múltiples métodos de pago disponibles.',
  },
  {
    number: '03',
    icon: ArrowRightLeft,
    title: 'Usa tu saldo',
    description: 'Paga, ahorra o retira a bolívares cuando lo necesites. Transacciones instantáneas y seguras.',
  },
  {
    number: '04',
    icon: Settings,
    title: 'Administra tus fondos',
    description: 'Control total sobre tu dinero. Historial de transacciones, estadísticas y más.',
  },
];

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xero-turquoise text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">
            Cómo funciona
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Empieza en{' '}
            <span className="text-xero-turquoise">4 simples pasos</span>
          </h2>
          <p className="text-white/70 text-lg">
            Proteger tu dinero nunca fue tan fácil. Sigue estos pasos y comienza a ahorrar sin preocupaciones.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
