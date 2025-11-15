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
    <Section id="values" backgroundColor="gray">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Philosophy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three core principles guide our approach to beaver coexistence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <Card key={index}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
