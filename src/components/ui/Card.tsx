import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
}
