import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Strategies from '@/components/Strategies';
import ServiceAreas from '@/components/ServiceAreas';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Strategies />
        <Philosophy />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
