import React from 'react';
import { useIntersectionObserver } from '@/hooks';
import type { Partner } from '@/types';

const PartnersSection = React.memo(() => {
  const [partnersRef, isPartnersVisible] = useIntersectionObserver();

  const partners: Partner[] = [
    { name: 'TechCorp', logo: '/logos/techcorp.svg' },
    { name: 'InnovateLab', logo: '/logos/innovatelab.svg' },
    { name: 'FutureScale', logo: '/logos/futurescale.svg' },
    { name: 'GrowthWorks', logo: '/logos/growthworks.svg' },
    { name: 'CloudVision', logo: '/logos/cloudvision.svg' },
    { name: 'DataFlow', logo: '/logos/dataflow.svg' },
  ];

  return (
    <section 
      ref={partnersRef}
      className={`section bg-white transition-all duration-1000 ${
        isPartnersVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="container-lg text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Trusted by Leading Companies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies that have accelerated their growth with our fractional executives
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-16 items-center">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center group"
              >
                <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-600 transition-colors duration-300 px-6 py-3 rounded-lg hover:bg-gray-50">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

PartnersSection.displayName = 'PartnersSection';

export default PartnersSection;
