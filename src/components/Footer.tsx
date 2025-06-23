import React from 'react';

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo/Brand */}
          <div className="text-xl font-bold text-blue-600">            
                 <img src="/expertify_puzzle_logo.svg" alt="Expertify" className="h-8 lg:h-10 w-auto"/>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            © {currentYear} Expertify. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;