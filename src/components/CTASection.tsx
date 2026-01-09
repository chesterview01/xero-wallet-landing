import { Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const handleInstall = () => {
    window.open('https://xero.vercel.app/?install=1', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-xero-turquoise/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* CTA Card */}
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-xero-navy via-xero-navy-light to-xero-navy relative overflow-hidden">
            {/* Inner decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-xero-turquoise/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-xero-turquoise/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Empieza hoy mismo a{' '}
                <span className="text-xero-turquoise">proteger tu dinero</span>
              </h2>
              <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Únete a miles de venezolanos que ya confían en Xero Wallet para mantener su dinero seguro y protegido contra la inflación.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" onClick={handleInstall} className="group">
                  <Download className="w-5 h-5" />
                  Instalar aplicación
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex items-center justify-center gap-6 text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Sin tarifas ocultas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Soporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
