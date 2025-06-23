import React, { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null); // 'success', 'error', or null

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim() || !validateEmail(email)) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const errorData = await response.json();
        console.error('Subscription error:', errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'success':
        return {
          icon: <CheckCircle className="h-5 w-5 text-green-600" />,
          text: 'Thanks! We\'ll be in touch soon.',
          className: 'text-green-600'
        };
      case 'error':
        return {
          icon: <AlertCircle className="h-5 w-5 text-red-600" />,
          text: 'Please enter a valid email address.',
          className: 'text-red-600'
        };
      default:
        return null;
    }
  };

  const statusMessage = getStatusMessage();

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
            />

            <button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
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

            {statusMessage && (
              <div className={`flex items-center justify-center gap-2 ${statusMessage.className}`}>
                {statusMessage.icon}
                <span className="text-sm font-medium">{statusMessage.text}</span>
              </div>
            )}

            <p className="text-sm text-gray-600">
              Join thousands of businesses already using our platform
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// import React, { useCallback } from 'react';
// import { AlertCircle, Loader2, ArrowRight, Star, ChevronDown } from 'lucide-react';
// import { useIntersectionObserver } from '@/hooks';
// import type { HeroSectionProps } from '@/types';

// const HeroSection = React.memo<HeroSectionProps>(({ 
//   email, 
//   setEmail, 
//   onSubmit, 
//   isSubmitting, 
//   validationError, 
//   submitStatus 
// }) => {
//   const [heroRef, isHeroVisible] = useIntersectionObserver();

//   const handleSubmit = useCallback(async () => {
//     if (!validationError && email.trim()) {
//       await onSubmit();
//     }
//   }, [email, validationError, onSubmit]);

//   const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !validationError && email.trim()) {
//       handleSubmit();
//     }
//   }, [handleSubmit, validationError, email]);

//   return (
//     <section 
//       ref={heroRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50" 
//       role="banner"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-grid opacity-20"></div>
//       <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
//       <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-pink-400 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
//       <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>

//       <div className={`relative z-10 container-sm text-center transition-all duration-1000 ${
//         isHeroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
//       }`}>
//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full text-sm font-medium text-gray-700 mb-8 hover:bg-white/90 transition-all duration-200 cursor-pointer">
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//           </span>
//           Now Available - Fractional Executives On Demand
//         </div>

//         {/* Main Heading */}
//         <div className="mb-8 space-y-4">
//           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
//             <span className="block text-gray-900 mb-2">
//               Flexible experts
//             </span>
//             <span className="block text-gradient animate-bounce-subtle">
//               on demand
//             </span>
//           </h1>
//           <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Expertify connects growing businesses with top-tier fractional executives 
//             in product, growth, tech, and operations.
//           </p>
//         </div>

//         {/* Enhanced Email Form */}
//         <div className="max-w-lg mx-auto mb-12">
//           <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-xl">
//             <div className="flex-1 relative">
//               <label htmlFor="email-input" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email-input"
//                 type="email"
//                 placeholder="Enter your email address"
//                 className={`w-full px-6 py-4 border-0 rounded-xl bg-transparent focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 transition-all outline-none text-gray-900 placeholder-gray-500 ${
//                   validationError ? 'ring-2 ring-red-300' : ''
//                 }`}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 disabled={isSubmitting}
//                 aria-invalid={!!validationError}
//                 aria-describedby={validationError ? 'email-error' : undefined}
//                 autoComplete="email"
//               />
//             </div>
            
//             <button
//               onClick={handleSubmit}
//               disabled={isSubmitting || !!validationError || !email.trim()}
//               className="sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 flex items-center justify-center gap-2 focus-ring whitespace-nowrap"
//               aria-describedby="submit-description"
//             >
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="h-5 w-5 animate-spin" />
//                   Processing...
//                 </>
//               ) : (
//                 <>
//                   Get Started
//                   <ArrowRight className="h-5 w-5" />
//                 </>
//               )}
//             </button>
//           </div>
          
//           {validationError && (
//             <div 
//               id="email-error" 
//               className="mt-3 flex items-center justify-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg border border-red-200"
//               role="alert"
//               aria-live="polite"
//             >
//               <AlertCircle className="h-4 w-4 flex-shrink-0" />
//               {validationError}
//             </div>
//           )}
          
//           <p id="submit-description" className="mt-4 text-sm text-gray-600">
//             Join thousands of businesses already using our platform
//           </p>
//         </div>

//         {/* Social Proof */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
//           <div className="flex items-center gap-2">
//             <div className="flex -space-x-2">
//               {[1,2,3,4,5].map((i) => (
//                 <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
//                   {String.fromCharCode(64 + i)}
//                 </div>
//               ))}
//             </div>
//             <span>1,000+ companies trust us</span>
//           </div>
//           <div className="flex items-center gap-1">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//             ))}
//             <span className="ml-1">4.9/5 rating</span>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="h-6 w-6 text-gray-400" />
//         </div>
//       </div>
//     </section>
//   );
// });

// HeroSection.displayName = 'HeroSection';

// export default HeroSection;