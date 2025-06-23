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

  const handleSubmit = async (e : React.FormEvent) => {
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