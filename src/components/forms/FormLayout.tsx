// src/components/forms/FormLayout.tsx
'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { NavItem } from '@/types';

interface FormLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export const FormLayout: React.FC<FormLayoutProps> = ({ 
  children, 
  title, 
  description 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'How It Works', target: 'how' },
    { label: 'Services', target: 'services' },
    { label: 'Testimonials', target: 'testimonials' },
    { label: 'Contact', target: 'contact' }
  ];

  const scrollToSection = (target: string) => {
    // For form pages, we might want to navigate back to home first
    window.location.href = `/#${target}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        navItems={navItems}
      />
      
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          </div>
          
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};