import React from 'react';
import { TrendingUp, Code, Headphones, Database } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks';
import type { Service } from '@/types';

const ServicesSection = React.memo(() => {
  const [servicesRef, isServicesVisible] = useIntersectionObserver();

  const services: Service[] = [
    {
      icon: <TrendingUp size={40} />,
      color: 'blue',
      title: 'Product Leadership',
      description: 'Drive strategy, roadmaps, and product-market fit with experienced product executives.',
      features: ['Product Strategy', 'Roadmap Planning', 'Market Analysis', 'Team Leadership'],
      stats: '90% faster time-to-market'
    },
    {
      icon: <Code size={40} />,
      color: 'green',
      title: 'Technology & Engineering',
      description: 'CTO-level guidance, team structuring, and scalable architecture solutions.',
      features: ['Technical Strategy', 'Team Building', 'Architecture Design', 'Process Optimization'],
      stats: '75% reduction in technical debt'
    },
    {
      icon: <Headphones size={40} />,
      color: 'purple',
      title: 'Customer Success',
      description: 'Improve retention and deliver world-class customer support experiences.',
      features: ['Customer Strategy', 'Success Metrics', 'Support Optimization', 'Retention Programs'],
      stats: '85% improvement in retention'
    },
    {
      icon: <Database size={40} />,
      color: 'orange',
      title: 'Revenue & Sales',
      description: 'Boost pipeline growth, close rates, and revenue operations efficiency.',
      features: ['Sales Strategy', 'Pipeline Management', 'Revenue Operations', 'Performance Metrics'],
      stats: '200% increase in pipeline'
    }
  ];

  return (
    <section 
      ref={servicesRef}
      id="services" 
      className={`section bg-white transition-all duration-1000 ${
        isServicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container-lg">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide top-tier fractional leaders across core business functions to accelerate your growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group hover-lift transition-all duration-500 delay-${index * 100}`}
            >
              <div className="card-modern p-8 h-full bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${
                  service.color === 'blue' ? 'from-blue-400 to-blue-600' :
                  service.color === 'green' ? 'from-green-400 to-green-600' :
                  service.color === 'purple' ? 'from-purple-400 to-purple-600' :
                  'from-orange-400 to-orange-600'
                }`}></div>
                
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-r ${
                  service.color === 'blue' ? 'from-blue-100 to-blue-200 text-blue-600' :
                  service.color === 'green' ? 'from-green-100 to-green-200 text-green-600' :
                  service.color === 'purple' ? 'from-purple-100 to-purple-200 text-purple-600' :
                  'from-orange-100 to-orange-200 text-orange-600'
                } group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  {service.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Stats */}
                  <div className={`text-sm font-semibold ${
                    service.color === 'blue' ? 'text-blue-600' :
                    service.color === 'green' ? 'text-green-600' :
                    service.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`}>
                    {service.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;