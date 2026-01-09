import { Shield, Zap, Wallet, PiggyBank, Smartphone, HeadphonesIcon } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Aislamiento de la inflación',
    description: 'Guarda tu dinero en USDX y evita la pérdida de valor del bolívar. Mantén tu poder adquisitivo intacto.',
  },
  {
    icon: Zap,
    title: 'Método de pago moderno',
    description: 'Envía y recibe pagos instantáneos entre usuarios. Sin esperas, sin complicaciones.',
  },
  {
    icon: Wallet,
    title: 'Retiros rápidos',
    description: 'Convierte tus USDX en bolívares y recíbelos en minutos directamente en tu cuenta bancaria.',
  },
  {
    icon: PiggyBank,
    title: 'Resguardo seguro',
    description: 'Ahorra sin que tu dinero se devalúe. Tu futuro financiero está protegido con nosotros.',
  },
  {
    icon: Smartphone,
    title: 'Accesibilidad total',
    description: 'Disponible desde cualquier dispositivo, sin necesidad de bancos tradicionales ni trámites complicados.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Confianza garantizada',
    description: 'Sistema de disputas y soporte dedicado para transacciones seguras. Estamos contigo siempre.',
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-xero-turquoise via-xero-navy to-xero-turquoise" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-xero-turquoise/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-xero-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-xero-turquoise/10 text-xero-turquoise text-sm font-medium mb-4">
            Beneficios
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            ¿Por qué elegir{' '}
            <span className="text-xero-turquoise">Xero Wallet</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Diseñado específicamente para las necesidades financieras de los venezolanos. 
            Protección, rapidez y confianza en una sola aplicación.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-xero-turquoise/50 hover-lift glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-xero-turquoise/20 to-xero-navy/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-xero-turquoise" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-xero-turquoise transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
