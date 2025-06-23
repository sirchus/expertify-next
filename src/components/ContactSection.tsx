'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Zap, CheckCircle, PhoneCallIcon, Target, Users, ArrowRight, Clock, Shield } from 'lucide-react';

const ContactSection = React.memo(() => {
  const router = useRouter();

  const handleJoinAsExpert = () => {
    router.push('/apply-as-expert');
  };

  const handleFindTalent = () => {
    router.push('/find-talent');
  };

  const stats = [
    { number: '500+', label: 'Expert Network' },
    { number: '48hrs', label: 'Average Match Time' },
    { number: '95%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="contact" className="py-10 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of companies that have accelerated their growth with our fractional executives. 
            Choose your path and get started today.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Expert Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Expert Network
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Share your expertise with growing companies. Work flexibly with vetted startups 
                and scale-ups that value your experience.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Flexible, high-impact engagements</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Work with vetted, growing companies</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Competitive compensation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Build your executive portfolio</span>
                </li>
              </ul>

              <button
                onClick={handleJoinAsExpert}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg"
              >
                Apply as Expert
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <p className="text-sm text-gray-500 mt-3 text-center">
                <Clock className="h-4 w-4 inline mr-1" />
                Application review in 48 hours
              </p>
            </div>
          </div>

          {/* Client Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Find Your Executive
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get matched with seasoned executives who&#39;ve scaled companies like yours. 
                Start working with the right leader in days, not months.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Pre-vetted, experienced executives</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Perfect cultural and skills match</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Flexible engagement models</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Immediate impact and results</span>
                </li>
              </ul>

              <button
                onClick={handleFindTalent}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg"
              >
                Get Matched Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <p className="text-sm text-gray-500 mt-3 text-center">
                <Shield className="h-4 w-4 inline mr-1" />
                Satisfaction guaranteed
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500 font-medium">Need to talk first?</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Alternative Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneCallIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-semibold mb-2 text-gray-900">Schedule a Call</h4>
            <p className="text-gray-600 text-sm mb-4">
              Book a 30-minute consultation to discuss your specific needs.
            </p>
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline"
            >
              Book now →
            </a>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-semibold mb-2 text-gray-900">Email Us</h4>
            <p className="text-gray-600 text-sm mb-4">
              Send us your questions and we&#39;ll respond within 2 hours.
            </p>
            <a 
              href="mailto:hello@getexpertify.com" 
              className="text-purple-600 hover:text-purple-700 font-medium text-sm hover:underline"
            >
              hello@getexpertify.com →
            </a>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-semibold mb-2 text-gray-900">Quick Response</h4>
            <p className="text-gray-600 text-sm mb-4">
              Get fast answers to common questions about our platform.
            </p>
            <a 
              href="#" 
              className="text-green-600 hover:text-green-700 font-medium text-sm hover:underline"
            >
              View FAQ →
            </a>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Trusted by <span className="font-semibold text-gray-700">200+ companies</span> • 
            <span className="font-semibold text-gray-700"> 500+ experts</span> in our network • 
            Average <span className="font-semibold text-gray-700">4.9/5</span> rating
          </p>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;