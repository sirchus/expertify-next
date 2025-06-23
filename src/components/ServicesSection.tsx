import React from 'react';
import { TrendingUp, Code, Headphones, Database } from 'lucide-react';

const ServicesSection = () => {
  type ServiceColor = 'blue' | 'green' | 'purple' | 'rose' | 'orange';

  const services: {
    icon: React.ReactNode;
    title: string;
    description: string;
    result: string;
    color: ServiceColor;
  }[] = [
    {
      icon: <TrendingUp size={32} />,
      title: 'Product Leadership',
      description: 'Strategic product guidance, roadmaps, and market fit expertise.',
      result: '90% faster time-to-market',
      color: 'blue'
    },
    {
      icon: <Code size={32} />,
      title: 'Technology & Engineering',
      description: 'CTO-level guidance, architecture, and scalable team building.',
      result: '75% reduction in technical debt',
      color: 'green'
    },
    {
      icon: <Headphones size={32} />,
      title: 'Customer Success',
      description: 'Retention strategies and world-class support experiences.',
      result: '85% improvement in retention',
      color: 'purple'
    },
    {
      icon: <Database size={32} />,
      title: 'Revenue & Sales',
      description: 'Pipeline growth, sales processes, and revenue operations.',
      result: '200% increase in qualified leads',
      color: 'rose'
    }
  ];

  // Color mapping to ensure proper Tailwind classes
  const getColorClasses = (color: 'blue' | 'green' | 'purple' | 'rose' | 'orange') => {
    const colorMap = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      rose: 'text-rose-600',
      orange: 'text-orange-600'
    };
    return colorMap[color] || 'text-gray-600';
  };

  return (
    <section id="services" className="py-20 px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Our Services</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We provide top-tier fractional leaders across core business functions to accelerate your growth.
                </p>
              </div>
              
              {/* TODO: Return the list of services from an API */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {services.map((item, i) => (
                  <div key={i} className="p-6 bg-white border rounded-lg shadow hover:shadow-xl transition duration-300">
                    <div className={`${getColorClasses(item.color)} mb-4 flex justify-center`}>{item.icon}</div>             
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
    // <section className="py-24 px-4 bg-gray-50">
    //   <div className="max-w-6xl mx-auto">
    //     <div className="text-center mb-16">
    //       <h2 className="text-3xl font-bold text-gray-900 mb-4">
    //         Expertise across key functions
    //       </h2>
    //       <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    //         Connect with fractional executives who have scaled companies like yours
    //       </p>
    //     </div>
        
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {services.map((service, index) => {
    //         const IconComponent = service.icon;
    //         return (
    //           <div key={index} className="card p-6 hover:shadow-md transition-shadow">
    //             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
    //               <IconComponent className="w-6 h-6 text-blue-600" />
    //             </div>
                
    //             <h3 className="font-semibold text-gray-900 mb-2">
    //               {service.title}
    //             </h3>
                
    //             <p className="text-gray-600 text-sm mb-4 leading-relaxed">
    //               {service.description}
    //             </p>
                
    //             <p className="text-sm font-medium text-blue-600">
    //               {service.result}
    //             </p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </section>
  );
};

export default ServicesSection;

// import React from 'react';
// import { TrendingUp, Code, Headphones, Database } from 'lucide-react';
// import { useIntersectionObserver } from '@/hooks';
// import type { Service } from '@/types';

// const ServicesSection = React.memo(() => {
//   const [servicesRef, isServicesVisible] = useIntersectionObserver();

//   const services: Service[] = [
//     {
//       icon: <TrendingUp size={40} />,
//       color: 'blue',
//       title: 'Product Leadership',
//       description: 'Drive strategy, roadmaps, and product-market fit with experienced product executives.',
//       features: ['Product Strategy', 'Roadmap Planning', 'Market Analysis', 'Team Leadership'],
//       stats: '90% faster time-to-market'
//     },
//     {
//       icon: <Code size={40} />,
//       color: 'green',
//       title: 'Technology & Engineering',
//       description: 'CTO-level guidance, team structuring, and scalable architecture solutions.',
//       features: ['Technical Strategy', 'Team Building', 'Architecture Design', 'Process Optimization'],
//       stats: '75% reduction in technical debt'
//     },
//     {
//       icon: <Headphones size={40} />,
//       color: 'purple',
//       title: 'Customer Success',
//       description: 'Improve retention and deliver world-class customer support experiences.',
//       features: ['Customer Strategy', 'Success Metrics', 'Support Optimization', 'Retention Programs'],
//       stats: '85% improvement in retention'
//     },
//     {
//       icon: <Database size={40} />,
//       color: 'orange',
//       title: 'Revenue & Sales',
//       description: 'Boost pipeline growth, close rates, and revenue operations efficiency.',
//       features: ['Sales Strategy', 'Pipeline Management', 'Revenue Operations', 'Performance Metrics'],
//       stats: '200% increase in pipeline'
//     }
//   ];

//   return (
//     <section 
//       ref={servicesRef}
//       id="services" 
//       className={`section bg-white transition-all duration-1000 ${
//         isServicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
//       }`}
//     >
//       <div className="container-lg">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Expertise</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We provide top-tier fractional leaders across core business functions to accelerate your growth
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div 
//               key={index} 
//               className={`group hover-lift transition-all duration-500 delay-${index * 100}`}
//             >
//               <div className="card-modern p-8 h-full bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
//                 {/* Background Gradient */}
//                 <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${
//                   service.color === 'blue' ? 'from-blue-400 to-blue-600' :
//                   service.color === 'green' ? 'from-green-400 to-green-600' :
//                   service.color === 'purple' ? 'from-purple-400 to-purple-600' :
//                   'from-orange-400 to-orange-600'
//                 }`}></div>
                
//                 {/* Icon */}
//                 <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-r ${
//                   service.color === 'blue' ? 'from-blue-100 to-blue-200 text-blue-600' :
//                   service.color === 'green' ? 'from-green-100 to-green-200 text-green-600' :
//                   service.color === 'purple' ? 'from-purple-100 to-purple-200 text-purple-600' :
//                   'from-orange-100 to-orange-200 text-orange-600'
//                 } group-hover:scale-110 transition-transform duration-300 relative z-10`}>
//                   {service.icon}
//                 </div>
                
//                 {/* Content */}
//                 <div className="relative z-10">
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
//                   <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
//                   {/* Features */}
//                   <ul className="space-y-2 mb-6">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
//                         <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
                  
//                   {/* Stats */}
//                   <div className={`text-sm font-semibold ${
//                     service.color === 'blue' ? 'text-blue-600' :
//                     service.color === 'green' ? 'text-green-600' :
//                     service.color === 'purple' ? 'text-purple-600' :
//                     'text-orange-600'
//                   }`}>
//                     {service.stats}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// });

// ServicesSection.displayName = 'ServicesSection';

// export default ServicesSection;