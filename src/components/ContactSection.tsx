import React from 'react';
import { Play, Mail, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks';
import type { ContactMethod } from '@/types';

const ContactSection = React.memo(() => {
  const [contactRef, isContactVisible] = useIntersectionObserver();

  const contactMethods: ContactMethod[] = [
    {
      icon: <Play className="h-6 w-6" />,
      title: 'Schedule a Call',
      description: 'Book a 30-minute consultation to discuss your needs and how we can help.',
      action: 'Book Now',
      color: 'blue'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      description: 'Send us your questions at hello@expertify.com',
      action: 'Send Email',
      color: 'green'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Quick Response',
      description: 'We typically respond within 2 hours during business hours.',
      action: 'Learn More',
      color: 'purple'
    }
  ];

  const benefits = [
    'Pre-vetted fractional executives',
    'Industry-specific expertise',
    'Flexible engagement models',
    'Proven track record',
    'Quick onboarding process',
    '24/7 support available'
  ];

  return (
    <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Connect with our team to find the perfect fractional executive for your business
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Schedule a Call</h4>
                        <p className="text-gray-600">
                          Book a 30-minute consultation to discuss your needs and how we can help.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Email Us</h4>
                        <p className="text-gray-600">
                          Send us your questions at{' '}
                          <a href="mailto:hello@expertify.com" className="text-blue-600 hover:underline">
                            hello@expertify.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Quick Response</h4>
                        <p className="text-gray-600">
                          We typically respond within 2 hours during business hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">Why Choose Expertify?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Pre-vetted fractional executives</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Industry-specific expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Flexible engagement models</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Proven track record</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Quick onboarding process</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    // <section 
    //   ref={contactRef}
    //   id="contact" 
    //   className={`section bg-white transition-all duration-1000 ${
    //     isContactVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
    //   }`}
    // >
    //   <div className="container-lg">
    //     <div className="text-center mb-20">
    //       <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
    //       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    //         Connect with our team to find the perfect fractional executive for your business
    //       </p>
    //     </div>
        
    //     <div className="grid lg:grid-cols-2 gap-16 items-center">
    //       {/* Contact Methods */}
    //       <div className="space-y-8">
    //         <h3 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h3>
    //         {contactMethods.map((method, index) => (
    //           <div 
    //             key={index} 
    //             className={`group hover-lift p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 delay-${index * 100}`}
    //           >
    //             <div className="flex items-start gap-4">
    //               <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${
    //                 method.color === 'blue' ? 'from-blue-100 to-blue-200 text-blue-600' :
    //                 method.color === 'green' ? 'from-green-100 to-green-200 text-green-600' :
    //                 'from-purple-100 to-purple-200 text-purple-600'
    //               } group-hover:scale-110 transition-transform duration-300`}>
    //                 {method.icon}
    //               </div>
    //               <div className="flex-1">
    //                 <h4 className="font-bold text-gray-900 mb-2">{method.title}</h4>
    //                 <p className="text-gray-600 mb-4">{method.description}</p>
    //                 <button className={`text-sm font-semibold ${
    //                   method.color === 'blue' ? 'text-blue-600 hover:text-blue-700' :
    //                   method.color === 'green' ? 'text-green-600 hover:text-green-700' :
    //                   'text-purple-600 hover:text-purple-700'
    //                 } flex items-center gap-1 transition-colors duration-200`}>
    //                   {method.action}
    //                   <ArrowRight className="h-4 w-4" />
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
          
    //       {/* Benefits */}
    //       <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 lg:p-12 rounded-3xl">
    //         <h3 className="text-3xl font-bold mb-8 text-gray-900">Why Choose Expertify?</h3>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //           {benefits.map((benefit, index) => (
    //             <div 
    //               key={index} 
    //               className={`flex items-center gap-3 transition-all duration-300 delay-${index * 50}`}
    //             >
    //               <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
    //               <span className="text-gray-700 font-medium">{benefit}</span>
    //             </div>
    //           ))}
    //         </div>
            
    //         <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50">
    //           <div className="flex items-center gap-4 mb-4">
    //             <div className="flex -space-x-2">
    //               {[1,2,3].map((i) => (
    //                 <div key={i} className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">
    //                   {String.fromCharCode(64 + i)}
    //                 </div>
    //               ))}
    //             </div>
    //             <div>
    //               <p className="font-semibold text-gray-900">Join 1,000+ companies</p>
    //               <p className="text-sm text-gray-600">Already scaling with our experts</p>
    //             </div>
    //           </div>
    //           <button className="w-full btn-modern bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-glow">
    //             Start Your Journey Today
    //             <ArrowRight className="h-5 w-5 ml-2" />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
