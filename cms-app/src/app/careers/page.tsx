import HeroSection from '@/components/sections/HeroSection';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import Benefits from '@/components/sections/Benefits';
import FAQAccordion from '@/components/sections/FAQAccordion';
// import WhyUs from '@/components/sections/WhyUs';
import CTABanner from '@/components/sections/CTABanner';

export default function careersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <FeaturesGrid />
      <Benefits />
      <FAQAccordion />
      {/* <WhyUs /> */}
      <CTABanner />
    </main>
  );
}