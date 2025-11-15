import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-900 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/footer-logo.svg"
                alt="Keystone Beaver Strategies"
                width={150}
                height={45}
              />
            </Link>
            <p className="text-sm text-gray-700">
              Coexistence solutions for Oregon&apos;s waterways
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 border-b-2 border-gray-900 pb-2 inline-block">
              Service Areas
            </h4>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <p>Portland Core and West Hills</p>
              <p>Tualatin River Watershed</p>
              <p>Johnson Creek Watershed</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <Link href="#strategies" className="hover:text-gray-900 transition-colors">
                Strategies
              </Link>
              <Link href="#values" className="hover:text-gray-900 transition-colors">
                Values
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <a
                href="mailto:jarad@keystonebeaverstrategies.com"
                className="hover:text-gray-900 transition-colors break-words"
              >
                jarad@keystonebeaverstrategies.com
              </a>
              <a
                href="tel:+16035813197"
                className="hover:text-gray-900 transition-colors"
              >
                (603) 581-3197
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-700">
          <p>© {currentYear} Keystone Beaver Strategies. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
