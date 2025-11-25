import React from 'react';
import Image from 'next/image';
import Container from './ui/Container';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section id="home" className="bg-white shadow-2xl overflow-hidden ml-6 md:ml-12 min-h-[500px] md:min-h-[600px]">
      <div className="relative w-full h-full min-h-[500px] md:min-h-[600px]">
        <Image
          src="/hero-background.jpg?v=2"
          alt="Beaver habitat"
          fill
          className="object-cover"
          priority
          quality={90}
          unoptimized
        />
      </div>
    </section>
  );
}
