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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
            <a
              href="mailto:jarad@keystonebeaverstrategies.com"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-blue-50 rounded-lg p-3 group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email</p>
                  <p className="font-medium text-gray-900 text-base break-words">
                    jarad@keystonebeaverstrategies.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="tel:+16035813197"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-green-400 hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-green-50 rounded-lg p-3 group-hover:bg-green-100 transition-colors">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Phone</p>
                  <p className="font-medium text-gray-900 text-base">(603) 581-3197</p>
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
