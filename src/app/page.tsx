import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Philosophy from '@/components/Philosophy';
import Strategies from '@/components/Strategies';
import Contact from '@/components/Contact';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/hero-background.jpg?v=2"
          alt="Beaver habitat"
          fill
          className="object-cover"
          priority
          quality={90}
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <Header />
      <main className="md:ml-24 relative z-10">
        {/* Text Section */}
        <div className="px-6 md:px-12 py-16 md:py-24 min-h-[600px] md:min-h-[700px] flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              Coexistence for Oregon&apos;s Waterways
            </h1>

            <p className="text-lg md:text-xl text-white mb-10 leading-relaxed max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              We help Oregon landowners, communities, and agencies manage water and wildlife
              harmoniously through coexistence solutions that reduce flooding, restore habitat,
              and keep beavers on the landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="#contact">
                Get in touch
              </Button>
              <Button variant="secondary" href="#strategies">
                Explore Our Strategies
              </Button>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="bg-white shadow-2xl overflow-hidden ml-6 md:ml-12">
            <Strategies />
          </div>
          <div className="bg-white shadow-2xl overflow-hidden ml-6 md:ml-12">
            <Philosophy />
          </div>
          <div className="bg-white shadow-2xl overflow-hidden ml-6 md:ml-12">
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
