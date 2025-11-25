"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Strategies", href: "#strategies" },
    { name: "Philosophy", href: "#values" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <header className="hidden md:flex fixed left-0 top-0 h-screen w-24 hover:w-64 z-50 bg-white/85 backdrop-blur-sm shadow-lg flex-col items-start py-8 px-6 transition-all duration-300 ease-in-out group">
        {/* Logo and Name */}
        <Link href="/" className="mb-12 hover:opacity-80 transition-opacity self-center flex flex-col items-center gap-3">
          <Image
            src="/beaver-logo.svg"
            alt="Keystone Beaver Strategies"
            width={60}
            height={60}
            priority
          />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-900 font-bold text-xs text-center tracking-wider uppercase whitespace-nowrap">
            Keystone Beaver<br />Strategies
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-6 flex-1 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-base flex items-center gap-4 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-orange-500 transition-colors flex-shrink-0"></span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-white/85 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/beaver-logo.svg"
              alt="Keystone Beaver Strategies"
              width={50}
              height={50}
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-orange-500"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
