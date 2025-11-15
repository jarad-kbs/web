import React from 'react';
import Container from './ui/Container';
import Card from './ui/Card';
import Section from './ui/Section';

export default function Philosophy() {
  const principles = [
    {
      title: 'Coexistence first',
      description:
        'Beavers and human infrastructure can coexist when engineering meets ecological understanding',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Regulation as guidance',
      description:
        "Oregon's regulatory framework ensures solutions protect fish passage, wetland function, and sustainability",
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Prevention over reaction',
      description:
        'Well-designed installations with maintenance prevent costly dam removal cycles and repeated conflicts',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
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
                <div className="mb-4">{principle.icon}</div>
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
