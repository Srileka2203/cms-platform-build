import BlogHero from '@/components/sections/BlogHero';
import BlogGrid from '@/components/sections/BlogGrid';
import Newsletter from '@/components/ui/Newsletter';

export default function blogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BlogHero />
      <BlogGrid />
      <Newsletter />
    </main>
  );
}