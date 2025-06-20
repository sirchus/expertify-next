// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>src/app/page.tsx</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Menu, X, AlertCircle, CheckCircle, Loader2, Users, Target, Zap, Star, Code, Database, TrendingUp, Headphones } from 'lucide-react';
// Import Image only if we're going to use it

// Types
interface NavItem {
  label: string;
  target: string;
}

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
  navItems: NavItem[];
}

interface HeroSectionProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: () => Promise<void>;
  isSubmitting: boolean;
  validationError: string;
  submitStatus: 'idle' | 'success' | 'error';
}

// Custom Hooks
const useEmailValidation = (email: string) => {
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!email) {
      setError('');
      setIsValid(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsValid(false);
    } else {
      setError('');
      setIsValid(true);
    }
  }, [email]);

  return { error, isValid };
};

const useScrollToSection = () => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return { scrollToSection, sectionRefs };
};

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
          <div className="text-center p-8">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-4">
              We're sorry, but there was an error loading this page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
const Toast: React.FC<{
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}> = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top duration-300">
      <div className={`flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg ${
        type === 'success' 
          ? 'bg-green-50 text-green-800 border border-green-200' 
          : 'bg-red-50 text-red-800 border border-red-200'
      }`}>
        {type === 'success' ? (
          <CheckCircle className="h-5 w-5" />
        ) : (
          <AlertCircle className="h-5 w-5" />
        )}
        <span className="font-medium">{message}</span>
        <button 
          onClick={onClose}
          className="ml-2 hover:opacity-70 transition-opacity"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

// Header Component
const Header = React.memo<HeaderProps>(({ isMenuOpen, setIsMenuOpen, scrollToSection, navItems }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle escape key for mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen, setIsMenuOpen]);

  // Focus management for mobile menu
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const firstButton = menuRef.current.querySelector('button');
      firstButton?.focus();
    }
  }, [isMenuOpen]);

  const handleNavClick = useCallback((target: string) => {
    scrollToSection(target);
    setIsMenuOpen(false);
  }, [scrollToSection, setIsMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              aria-label="Expertify - Home"
            >
              Expertify
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
                aria-label={`Go to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            ref={menuRef}
            className="md:hidden border-t border-gray-200 py-4 animate-in slide-in-from-top duration-200"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors focus:outline-none focus:bg-blue-50 focus:text-blue-600"
                aria-label={`Go to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

// Hero Section Component
const HeroSection = React.memo<HeroSectionProps>(({ 
  email, 
  setEmail, 
  onSubmit, 
  isSubmitting, 
  validationError, 
  submitStatus 
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(async () => {
    if (!validationError && email.trim()) {
      await onSubmit();
    }
  }, [email, validationError, onSubmit]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !validationError && email.trim()) {
      handleSubmit();
    }
  }, [handleSubmit, validationError, email]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" role="banner">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Flexible experts
            </span>
            <span className="block text-blue-600 mt-2">on demand</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Expertify connects growing businesses with top-tier fractional executives 
            in product, growth, tech, and operations.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="space-y-4">
            <div className="relative">
              <label htmlFor="email-input" className="sr-only">
                Email address
              </label>
              <input
                ref={inputRef}
                id="email-input"
                type="email"
                placeholder="Enter your email address"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-500 ${
                  validationError 
                    ? 'border-red-300 focus:ring-red-500' 
                    : 'border-gray-300'
                } ${submitStatus === 'success' ? 'border-green-300' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isSubmitting}
                aria-invalid={!!validationError}
                aria-describedby={validationError ? 'email-error' : undefined}
                autoComplete="email"
              />
              
              {validationError && (
                <div 
                  id="email-error" 
                  className="absolute left-0 mt-1 flex items-center gap-1 text-sm text-red-600"
                  role="alert"
                  aria-live="polite"
                >
                  <AlertCircle className="h-4 w-4" />
                  {validationError}
                </div>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !!validationError || !email.trim()}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
              aria-describedby="submit-description"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                'Get Started'
              )}
            </button>
            
            <p id="submit-description" className="text-sm text-gray-600">
              Join thousands of businesses already using our platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// Main App Component
export default function ExpertifySPA() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const { error: validationError, isValid } = useEmailValidation(email);
  const { scrollToSection } = useScrollToSection();

  const navItems: NavItem[] = [
    { label: 'How It Works', target: 'how' },
    { label: 'Services', target: 'services' },
    { label: 'Testimonials', target: 'testimonials' },
    { label: 'Contact', target: 'contact' }
  ];

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToastMessage(message);
    setToastType(type);
    setToastVisible(true);
  }, []);

  const hideToast = useCallback(() => {
    setToastVisible(false);
  }, []);

  const handleEmailSubmit = useCallback(async () => {
    if (!isValid || !email.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate success/failure (80% success rate)
      if (Math.random() > 0.2) {
        setSubmitStatus('success');
        showToast('Thanks! We&apos;ll be in touch soon.', 'success');
        setEmail(''); // Clear form on success
      } else {
        throw new Error('Network error');
      }
    } catch (error) {
      setSubmitStatus('error');
      showToast('Something went wrong. Please try again.', 'error');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, isValid, showToast]);

  // Close mobile menu when clicking outside
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

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white text-gray-800">
        <Header 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          scrollToSection={scrollToSection} 
          navItems={navItems} 
        />
        
        <main role="main">
          <HeroSection 
            email={email}
            setEmail={setEmail}
            onSubmit={handleEmailSubmit}
            isSubmitting={isSubmitting}
            validationError={validationError}
            submitStatus={submitStatus}
          />      

          {/* Partners Logos Section */}
          <section id="partners" className="py-20 px-4 bg-white text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Trusted Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">We collaborate with leading innovators and businesses worldwide.</p>
            <div className="overflow-hidden">
              {/* <div className="flex flex-wrap justify-center gap-8 items-center max-w-5xl mx-auto"> */}
              <div className="inline-flex animate-marquee gap-12">
                {[
                  { name: 'Partner 1', logo: '/logos/partner1.png' },
                  { name: 'Partner 2', logo: '/logos/partner2.png' },
                  { name: 'Partner 3', logo: '/logos/partner3.png' },
                  { name: 'Partner 4', logo: '/logos/partner4.png' },
                  { name: 'Partner 5', logo: '/logos/partner5.png' }
                ].concat([
                  { name: 'Partner 1', logo: '/logos/partner1.png' },
                  { name: 'Partner 2', logo: '/logos/partner2.png' },
                  { name: 'Partner 3', logo: '/logos/partner3.png' },
                  { name: 'Partner 4', logo: '/logos/partner4.png' },
                  { name: 'Partner 5', logo: '/logos/partner5.png' }
                ]).map((partner, index) => (
                  <div key={index} className="w-40 h-20 flex items-center justify-center">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{partner.name}</h3>
                    <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300" />
                  </div>
                ))}              
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how" className="py-20 px-4 bg-gray-50 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">How Expertify Works</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Get matched with top fractional executives in just a few simple steps
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {icon: <Target size={24} />, color: 'blue', title: 'Tell us what you need', desc: 'Share the role, skills, and duration you’re looking for. We’ll do the rest.' }, 
                  { icon: <Users size={24} />, color: 'green', title: 'Meet your matches', desc: 'We connect you with pre-vetted experts who fit your needs and culture.' }, 
                  { icon: <Zap size={24} />, color: 'purple', title: 'Scale with confidence', desc: 'Start working with a trusted expert in days, not weeks.' }
                ].map((item, index) => (
                  <div key={index} className="p-6 border rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-${item.color}-100 text-${item.color}-600`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>              
            </div>
          </section>
          
          {/* Services Section */}
          <section id="services" className="py-20 px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Our Services</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We provide top-tier fractional leaders across core business functions to accelerate your growth.
                </p>
              </div>
              
              {/* TODO: Return the list of services from an API */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {[
                  { icon: <TrendingUp size={32} />, color: 'blue', title: 'Product Leadership', desc: 'Drive strategy, roadmaps, and product-market fit.' }, 
                  { icon: <Code size={32} />, color: 'green', title: 'Technology & Engineering', desc: 'CTO-level guidance, team structuring, and scalable architecture.' }, 
                  { icon: <Headphones size={32} />, color: 'purple', title: 'Customer Success', desc: 'Improve retention and deliver world-class support.' }, 
                  { icon: <Database size={32} />, color: 'rose', title: 'Revenue & Sales', desc: 'Boost pipeline growth, close rates, and revenue operations.' }].map((item, i) => (
                  <div key={i} className="p-6 bg-white border rounded-lg shadow hover:shadow-xl transition duration-300">
                    <div className={`text-${item.color}-600 mb-4 flex justify-center`}>{item.icon}</div>             
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section id="testimonials" className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  See how fractional executives have transformed businesses like yours
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {[
                  { quote: 'Our fractional CTO helped us scale from 10 to 50 engineers in 8 months. The expertise and strategic guidance were invaluable for our growth.', name: 'Chris J.', role: 'SaaS Founder', initials: 'ST', score: 5, color: 'blue' }, 
                  { quote: 'Working with a fractional CPO transformed our product development process. We shipped 40% faster while improving quality.', name: 'Marcus J.', role: 'SaaS Founder', initials: 'MJ', score: 4, color: 'green' },
                  { quote: 'The fractional CMO we worked with increased our lead generation by 300% in just 6 months. ROI was immediate and substantial.', name: 'Sarah T.', role: 'SaaS Founder', initials: 'ST', score: 3, color: 'purple' }, 
                  { quote: "We scaled faster and smarter with Expertify&apos;s fractional COO—worth every cent.", name: 'James L.', role: 'Startup CEO', initials: 'JL', score: 2, color: 'rose' }
                 ].map((t, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    
                    <div className="flex items-center mb-4">
                      {/* <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4"> */}
                      <div className={`w-12 h-12 bg-${t.color}-500 text-white rounded-full flex items-center justify-center font-bold mr-4`}>
                      {/* <div className={`text-${t.color}-600 mb-4 flex justify-center`}> */}
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-gray-600 text-sm">{t.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(t.score)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-current" />)}
                    </div>
                    <blockquote className="italic text-gray-700 mb-4"><q>{t.quote}</q></blockquote>                    
                  </div>
                ))}
              </div>             
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Connect with our team to find the perfect fractional executive for your business
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Schedule a Call</h4>
                        <p className="text-gray-600">
                          Book a 30-minute consultation to discuss your needs and how we can help.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Email Us</h4>
                        <p className="text-gray-600">
                          Send us your questions at{' '}
                          <a href="mailto:hello@expertify.com" className="text-blue-600 hover:underline">
                            hello@expertify.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Quick Response</h4>
                        <p className="text-gray-600">
                          We typically respond within 2 hours during business hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">Why Choose Expertify?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Pre-vetted fractional executives</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Industry-specific expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Flexible engagement models</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Proven track record</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Quick onboarding process</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Toast
          message={toastMessage}
          type={toastType}
          isVisible={toastVisible}
          onClose={hideToast}
        />
      </div>
    </ErrorBoundary>
  );
}
