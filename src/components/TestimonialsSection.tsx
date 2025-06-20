import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks';
import type { Testimonial } from '@/types';

const TestimonialsSection = React.memo(() => {
  const [testimonialsRef, isTestimonialsVisible] = useIntersectionObserver();

  const testimonials: Testimonial[] = [
    {
      quote: 'Our fractional CTO helped us scale from 10 to 50 engineers in 8 months. The expertise and strategic guidance were invaluable for our growth journey.',
      name: 'Chris Johnson',
      role: 'CEO, TechFlow',
      company: 'TechFlow',
      initials: 'CJ',
      color: 'blue',
      rating: 5,
    },
    {
      quote: 'Working with a fractional CPO transformed our product development process. We shipped 40% faster while improving quality and user satisfaction.',
      name: 'Marcus Rivera',
      role: 'Founder, InnovateLab',
      company: 'InnovateLab',
      initials: 'MR',
      color: 'green',
      rating: 5,
    },
    {
      quote: 'The fractional CMO we worked with increased our lead generation by 300% in just 6 months. ROI was immediate and substantial.',
      name: 'Sarah Thompson',
      role: 'CEO, GrowthCo',
      company: 'GrowthCo',
      initials: 'ST',
      color: 'purple',
      rating: 5,
    },
    {
      quote: 'We scaled faster and smarter with Expertify\'s fractional COO. The operational efficiency gains were worth every investment.',
      name: 'James Liu',
      role: 'Founder, ScaleUp',
      company: 'ScaleUp',
      initials: 'JL',
      color: 'orange',
      rating: 5,
    }
  ];

  return (
    <section 
      ref={testimonialsRef}
      id="testimonials" 
      className={`section bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${
        isTestimonialsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container-lg">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how fractional executives have transformed businesses like yours
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card hover-lift transition-all duration-500 delay-${index * 100} bg-white hover:shadow-2xl group`}
            >
              {/* Quote */}
              <div className="mb-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-r ${
                  testimonial.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  testimonial.color === 'green' ? 'from-green-500 to-green-600' :
                  testimonial.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  'from-orange-500 to-orange-600'
                } group-hover:scale-110 transition-transform duration-300`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className={`absolute top-4 right-4 w-8 h-8 opacity-10 ${
                testimonial.color === 'blue' ? 'text-blue-500' :
                testimonial.color === 'green' ? 'text-green-500' :
                testimonial.color === 'purple' ? 'text-purple-500' :
                'text-orange-500'
              }`}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="btn-modern bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-glow">
            Read More Success Stories
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;
