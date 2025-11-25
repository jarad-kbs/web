import React from 'react';
import Container from './ui/Container';
import Card from './ui/Card';
import Section from './ui/Section';
import { Globe2, ShieldCheck, ClipboardCheck } from 'lucide-react';

export default function Philosophy() {
  const principles = [
    {
      title: 'Coexistence first',
      description:
        'Beavers and human infrastructure can coexist when engineering meets ecological understanding',
      icon: <Globe2 className="w-12 h-12 text-orange-500" />,
    },
    {
      title: 'Prevention over reaction',
      description:
        'Well-designed installations with maintenance prevent costly dam removal cycles and repeated conflicts',
      icon: <ClipboardCheck className="w-12 h-12 text-orange-500" />,
    },
    {
      title: 'Regulation as guidance',
      description:
        "Oregon's regulatory framework ensures solutions protect fish passage, wetland function, and sustainability",
      icon: <ShieldCheck className="w-12 h-12 text-orange-500" />,
    },
  ];

  return (
    <Section id="values" backgroundColor="dark">
      <Container>
        <div className="mb-16 pl-4 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Philosophy
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Three core principles guide our approach to beaver coexistence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-4 md:pl-8">
          {principles.map((principle, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {principle.title}
              </h3>
              <p className="text-gray-300 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
