import React from 'react';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks';
import type { Step } from '@/types';

const HowItWorksSection = React.memo(() => {
  const [howRef, isHowVisible] = useIntersectionObserver();

  const steps: Step[] = [
    {
      icon: <Target size={32} />,
      color: 'blue',
      title: 'Tell us what you need',
      description: 'Share the role, skills, and duration you\'re looking for. We\'ll handle the matching process.',
      features: ['Role specification', 'Skill requirements', 'Timeline planning']
    },
    {
      icon: <Users size={32} />,
      color: 'green',
      title: 'Meet your matches',
      description: 'We connect you with pre-vetted experts who fit your needs and company culture perfectly.',
      features: ['Pre-vetted experts', 'Culture fit', 'Experience match']
    },
    {
      icon: <Zap size={32} />,
      color: 'purple',
      title: 'Scale with confidence',
      description: 'Start working with a trusted expert in days, not weeks, and scale your business rapidly.',
      features: ['Quick onboarding', 'Immediate impact', 'Scalable solutions']
    }
  ];

  return (
    <section ref={howRef} id="how" className="py-20 px-4 bg-gray-50 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">How Expertify Works</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Get matched with top fractional executives in just a few simple steps
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {steps.map((item, index) => (
                  <div key={index} className="p-6 border rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-${item.color}-100 text-${item.color}-600`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>              
            </div>
          </section>
    // <section 
    //   ref={howRef}
    //   id="how" 
    //   className={`section bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${
    //     isHowVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
    //   }`}
    // >
    //   <div className="container-lg">
    //     <div className="text-center mb-20">
    //       <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">How Expertify Works</h2>
    //       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    //         Get matched with top fractional executives in just a few simple steps
    //       </p>
    //     </div>
        
    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
    //       {steps.map((step, index) => (
    //         <div 
    //           key={index} 
    //           className={`relative group hover-lift transition-all duration-500 delay-${index * 100}`}
    //         >
    //           <div className="card-modern p-8 h-full bg-white hover:shadow-2xl">
                                
    //             {/* Icon */}
    //             <div className="flex justify-center mb-6">
    //                 <div
    //                     className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${
    //                         step.color === 'blue'
    //                             ? 'from-blue-100 to-blue-200 text-blue-600'
    //                             : step.color === 'green'
    //                             ? 'from-green-100 to-green-200 text-green-600'
    //                             : 'from-purple-100 to-purple-200 text-purple-600'
    //                     } group-hover:scale-110 transition-transform duration-300`}
    //                 >
    //                     {step.icon}
    //                 </div>
    //             </div>
                
    //             {/* Content */}
    //             <h3 className="text-center text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
    //             <p className="text-center text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                
    //             {/* Features */}
    //             <ul className="space-y-3">
    //               {step.features.map((feature, idx) => (
    //                 <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
    //                   <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
    //                   {feature}
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
              
    //           {/* Connecting Line */}
    //           {index < steps.length - 1 && (
    //             <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
});

HowItWorksSection.displayName = 'HowItWorksSection';

export default HowItWorksSection;