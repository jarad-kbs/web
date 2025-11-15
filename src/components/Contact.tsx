import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import Button from './ui/Button';
import { Mail, Phone } from 'lucide-react';

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
                <Mail className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
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
                <Phone className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
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
