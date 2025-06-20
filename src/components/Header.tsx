import React, { useState, useCallback, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { HeaderProps } from '@/types';

const Header = React.memo<HeaderProps>(({ 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollToSection, 
  navItems 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((target: string) => {
    scrollToSection(target);
    setIsMenuOpen(false);
  }, [scrollToSection, setIsMenuOpen]);

  return (
    <header className={`sticky top-0 z-sticky transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container-md">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-2xl lg:text-3xl font-bold text-gradient hover:scale-105 transition-transform duration-200 focus-ring rounded-lg px-2 py-1"
              aria-label="Expertify - Home"
            >
              Expertify
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="nav-link px-3 py-2 rounded-lg focus-ring"
                aria-label={`Go to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
            <button className="btn-modern bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-glow ml-4">
              Get Started
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200 focus-ring"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-b-2xl shadow-xl animate-slide-down"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleNavClick(item.target)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-lg focus-ring"
                  aria-label={`Go to ${item.label} section`}
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full btn-modern bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;