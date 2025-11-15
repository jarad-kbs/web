import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import Button from './ui/Button';

export default function Contact() {
  return (
    <Section id="contact" backgroundColor="blue">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Ready to explore beaver coexistence solutions for your property or community?
            Contact us to schedule a consultation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <a
              href="mailto:jarad@keystonebeaverstrategies.com"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-center gap-3">
                <svg
                  className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="text-left">
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="font-medium text-gray-900">
                    jarad@keystonebeaverstrategies.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="tel:+16035813197"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-center gap-3">
                <svg
                  className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="text-left">
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <p className="font-medium text-gray-900">(603) 581-3197</p>
                </div>
              </div>
            </a>
          </div>

          <Button variant="primary" href="mailto:jarad@keystonebeaverstrategies.com">
            Schedule a Call
          </Button>
        </div>
      </Container>
    </Section>
  );
}
