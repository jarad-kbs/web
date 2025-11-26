"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, Facebook, Instagram } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: ChevronRight },
    { name: "Strategies", href: "#strategies", id: "strategies", icon: ChevronRight },
    { name: "Philosophy", href: "#values", id: "values", icon: ChevronRight },
    { name: "Contact", href: "#contact", id: "contact", icon: ChevronRight },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      let foundSection = false;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some offset for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            foundSection = true;
            break;
          }
        }
      }

      // If no section is in the detection zone, check if we're at the top
      if (!foundSection && window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <header className="hidden md:flex fixed left-0 top-0 h-screen w-24 hover:w-64 z-50 bg-white/85 backdrop-blur-sm shadow-lg flex-col items-center py-8 px-6 transition-all duration-500 ease-in-out group">
        {/* Logo and Name */}
        <Link href="/" className="mb-12 hover:opacity-80 transition-opacity self-center flex flex-col items-center gap-3">
          <Image
            src="/beaver-logo.svg"
            alt="Keystone Beaver Strategies"
            width={60}
            height={60}
            priority
          />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-gray-900 font-bold text-xs text-center tracking-wider uppercase whitespace-nowrap">
            Keystone Beaver<br />Strategies
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-6 flex-1 w-full items-center">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-base flex items-center gap-4 whitespace-nowrap w-full pl-3 group-hover:pl-0 group-hover:justify-start"
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-orange-500 rotate-90' : 'text-gray-400'} group-hover:text-orange-500 transition-all duration-500 ease-in-out flex-shrink-0`} />
                <span className="w-0 opacity-0 overflow-hidden group-hover:w-auto group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Social Media Links */}
        <div className="flex flex-col items-center gap-4 mt-6">
          <Link
            href="https://www.instagram.com/keystonebeaverstrategies/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </Link>
        </div>
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
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-orange-500 rotate-90' : ''} transition-all duration-500 ease-in-out`} />
                  {link.name}
                </Link>
              );
            })}

            {/* Social Media Links */}
            <div className="flex flex-col items-center gap-4 mt-4 pt-4 border-t border-gray-200">
              <Link
                href="https://www.instagram.com/keystonebeaverstrategies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
