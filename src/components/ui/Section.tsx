import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  backgroundColor?: 'white' | 'gray' | 'blue';
}

export default function Section({
  children,
  id,
  className = '',
  backgroundColor = 'white',
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
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
