import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';

export default function ServiceAreas() {
  const areas = [
    {
      name: 'Portland Core and West Hills',
      description: 'Serving the heart of Portland and surrounding hillside communities',
    },
    {
      name: 'Tualatin River Watershed',
      description: 'Coverage across the Tualatin River basin and tributaries',
    },
    {
      name: 'Johnson Creek Watershed',
      description: 'Supporting communities throughout the Johnson Creek system',
    },
  ];

  return (
    <Section id="service-areas" backgroundColor="gray">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide beaver coexistence solutions throughout the Portland metro area
            and surrounding watersheds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 border-2 border-blue-100 hover:border-blue-300 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {area.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
