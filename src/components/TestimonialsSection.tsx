import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Our fractional CTO helped us scale from 10 to 50 engineers in 8 months. The expertise and strategic guidance were invaluable for our growth.',
      name: 'Chris J.',
      role: 'SaaS Founder',
      initials: 'CJ',
      score: 5,
      color: 'blue'
    },
    {
      quote: 'Working with a fractional CPO transformed our product development process. We shipped 40% faster while improving quality.',
      name: 'Marcus J.',
      role: 'SaaS Founder',
      initials: 'MJ',
      score: 5,
      color: 'green'
    },
    {
      quote: 'The fractional CMO we worked with increased our lead generation by 300% in just 6 months. ROI was immediate and substantial.',
      name: 'Sarah T.',
      role: 'SaaS Founder',
      initials: 'ST',
      score: 5,
      color: 'purple'
    },
    {
      quote: "We scaled faster and smarter with Expertify's fractional COO—worth every cent.",
      name: 'James L.',
      role: 'Startup CEO',
      initials: 'JL',
      score: 5,
      color: 'rose'
    }
  ];

  // Color mapping to ensure proper Tailwind classes
  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-400',
      green: 'bg-green-400',
      purple: 'bg-purple-400',
      rose: 'bg-rose-400',
      orange: 'bg-orange-400'
    };
    return colorMap[color] || 'bg-gray-400';
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how fractional executives have transformed businesses like yours
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${getColorClasses(t.color)} text-white rounded-full flex items-center justify-center font-bold mr-4`}>
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
  );
};

export default TestimonialsSection;