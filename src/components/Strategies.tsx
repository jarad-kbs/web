import React from 'react';
import Image from 'next/image';
import Container from './ui/Container';
import Section from './ui/Section';

export default function Strategies() {
  const strategies = [
    {
      title: 'Pond Leveler Systems',
      subtitle: 'DEVICES THAT LET WATER FLOW',
      description:
        'Pond levelers are flow devices installed through beaver dams to regulate water levels without triggering their building instincts. By quietly draining excess water, they prevent flooding of roads, fields, or yards while allowing beavers to maintain their habitat. This coexistence tool protects property and preserves the ecological value of wetlands',
      image: '/pond-leveler.jpg',
    },
    {
      title: 'Culvert protection',
      subtitle: 'FLEXIBLE WATER MANAGEMENT',
      description:
        'Beavers often target culverts for damming, which can block water flow and cause costly flooding or road damage. Culvert protection devices provide a humane, effective solution—maintaining natural beaver activity while keeping infrastructure safe. We design and install barriers that balance ecosystem needs with property and community resilience',
      image: '/culvert-protection.jpg',
    },
    {
      title: 'Tree Caging',
      subtitle: 'PROTECTING YOUR RESOURCES',
      description:
        'We protect vulnerable trees from beaver chewing by installing sturdy wire mesh around trunks. This simple, non-invasive method allows beavers to thrive without losing valuable shade trees, riparian buffers, or landscaping. Tree caging balances ecological benefits with landowner needs, ensuring both forests and waterways remain resilient',
      image: '/tree-caging.jpg',
    },
  ];

  return (
    <Section id="strategies" backgroundColor="white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Strategies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built for resilience, designed for compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={strategy.image}
                  alt={strategy.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-5 h-5 bg-orange-500 rounded-sm flex-shrink-0 mt-1"></div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {strategy.title}
                  </h3>
                </div>
                <p className="text-sm italic text-gray-700 mb-3">
                  {strategy.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
