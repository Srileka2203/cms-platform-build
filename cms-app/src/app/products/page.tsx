import HeroSection from '@/components/sections/HeroSection';
import ProductsGrid from '@/components/sections/ProductsGrid';
import ProductCategories from '@/components/sections/ProductCategories';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import Benefits from '@/components/sections/Benefits';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';

export default function productsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ProductsGrid />
      <ProductCategories />
      <FeaturesGrid />
      <Benefits />
      <ComparisonTable />
      <Testimonials />
      <CTABanner />
    </main>
  );
}