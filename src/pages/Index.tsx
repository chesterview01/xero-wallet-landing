import HeroSection from '@/components/HeroSection';
import WhatIsUSDXSection from '@/components/WhatIsUSDXSection';
import BenefitsSection from '@/components/BenefitsSection';
import P2PMarketSection from '@/components/P2PMarketSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatIsUSDXSection />
      <BenefitsSection />
      <P2PMarketSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
