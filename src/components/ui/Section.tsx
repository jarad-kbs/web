import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  backgroundColor?: 'white' | 'gray' | 'blue' | 'dark';
}

export default function Section({
  children,
  id,
  className = '',
  backgroundColor = 'white',
}: SectionProps) {
  const bgColors = {
    white: 'bg-white/85',
    gray: 'bg-gray-100/85',
    blue: 'bg-blue-100/85',
    dark: 'bg-gray-900/85',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgColors[backgroundColor]} ${className}`}
    >
      {children}
    </section>
  );
}
