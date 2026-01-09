import { Download, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleInstall = () => {
    window.open('https://xero.vercel.app/?install=1', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-xero-turquoise/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-xero-turquoise/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative z-10 mx-auto px-4 pt-20 pb-32">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-16 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-xero-turquoise flex items-center justify-center">
              <span className="text-xero-navy font-bold text-xl font-display">X</span>
            </div>
            <span className="text-white font-display font-bold text-xl">Xero Wallet</span>
          </div>
          <Button variant="hero-outline" size="default" onClick={handleInstall}>
            <Download className="w-4 h-4" />
            Instalar
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
            <Shield className="w-4 h-4 text-xero-turquoise" />
            <span className="text-white/90 text-sm font-medium">Protección contra la inflación</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight animate-fade-in-delay-1">
            Tu dinero protegido{' '}
            <span className="text-xero-turquoise">contra la inflación</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Xero Wallet: la forma más segura de conservar valor en Venezuela. 
            Convierte bolívares a USDX y protege tu dinero.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <Button variant="hero" size="xl" onClick={handleInstall}>
              <Download className="w-5 h-5" />
              Instalar aplicación
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}>
              <Zap className="w-5 h-5" />
              Conocer más
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in-delay-3">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-xero-turquoise">100%</div>
              <div className="text-white/60 text-sm mt-1">Seguro</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-xero-turquoise">24/7</div>
              <div className="text-white/60 text-sm mt-1">Disponible</div>
            </div>
            <div className="text-3xl md:text-4xl text-center">
              <div className="font-display font-bold text-xero-turquoise">0%</div>
              <div className="text-white/60 text-sm mt-1">Comisiones ocultas</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
