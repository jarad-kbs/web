'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './ui/Container';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Strategies', href: '#strategies' },
    { name: 'Values', href: '#values' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.svg"
              alt="Keystone Beaver Strategies"
              width={200}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}
