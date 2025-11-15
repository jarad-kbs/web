import React from 'react';
import Image from 'next/image';
import Container from './ui/Container';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg?v=2"
          alt="Beaver habitat"
          fill
          className="object-cover"
          priority
          quality={90}
          unoptimized
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <Container className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Coexistence for Oregon&apos;s Waterways
          </h1>

          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            We help Oregon landowners, communities, and agencies manage water and wildlife
            harmoniously through coexistence solutions that reduce flooding, restore habitat,
            and keep beavers on the landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="#contact">
              Schedule a call
            </Button>
            <Button variant="secondary" href="#strategies">
              Explore Our Strategies
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
