import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import type { HeaderProps } from '@/types';

const Header = React.memo<HeaderProps>(({ 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollToSection, 
  navItems 
}) => {
    const menuRef = useRef<HTMLDivElement>(null);
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
        <header className={`fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
                <a
                    href="#"
                    className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    aria-label="Expertify - Home"
                    onMouseDown={e => e.preventDefault()}
                    >
                    <Image
                        src="/expertify_puzzle_logo.svg"
                        alt="Expertify"
                        width={48}
                        height={48}
                        className="h-10 lg:h-12 w-auto"
                        priority
                    />
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

export default Header;