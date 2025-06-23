'use client'

import React, { useState, useEffect } from 'react';
import { X, AlertCircle, CheckCircle } from 'lucide-react';

// Component imports
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection'
import HowItWorksSection from '@/components/HowItWorksSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Hook imports
import { useEmailValidation, useScrollToSection, useToast } from '@/hooks';

// Type imports
import type { NavItem, ToastProps } from '@/types';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 card-modern max-w-md">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-4">
              We&#39;re sorry, but there was an error loading this page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-modern bg-blue-600 text-white hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Toast Notification Component
const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 right-6 z-toast animate-slide-left">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-xl backdrop-blur-md border transition-all duration-300 ${
        type === 'success' 
          ? 'bg-green-50/90 text-green-800 border-green-200/50' 
          : 'bg-red-50/90 text-red-800 border-red-200/50'
      }`}>
        {type === 'success' ? (
          <CheckCircle className="h-5 w-5 flex-shrink-0" />
        ) : (
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
        )}
        <span className="font-medium">{message}</span>
        <button 
          onClick={onClose}
          className="ml-2 hover:opacity-70 transition-opacity p-1 rounded-full hover:bg-black/5"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-glow focus-ring z-50 hover:scale-110 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <svg className="h-6 w-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

// Main App Component
export default function ExpertifySPA() {
  const [email] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Custom hooks
  useEmailValidation(email);
  const { scrollToSection } = useScrollToSection();
  const { toastVisible, toastMessage, toastType, hideToast } = useToast();

  // Navigation items
  const navItems: NavItem[] = [
    { label: 'How It Works', target: 'how' },
    { label: 'Services', target: 'services' },
    { label: 'Testimonials', target: 'testimonials' },
    { label: 'Contact', target: 'contact' }
  ];


  // Handle mobile menu outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Add smooth scrolling to html element
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Header 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          scrollToSection={scrollToSection} 
          navItems={navItems} 
        />
        
        <main role="main">
          <HeroSection />
          <PartnersSection />
          <HowItWorksSection />
          <ServicesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>

        <Footer />

        <Toast
          message={toastMessage}
          type={toastType}
          isVisible={toastVisible}
          onClose={hideToast}
        />

        <BackToTopButton />
      </div>
    </ErrorBoundary>
  );
}