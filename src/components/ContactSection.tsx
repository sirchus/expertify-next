import React from 'react';
import { Mail, Zap, CheckCircle, PhoneCallIcon } from 'lucide-react';
// import { useIntersectionObserver } from '@/hooks';

const ContactSection = React.memo(() => {
//   const [contactRef, isContactVisible] = useIntersectionObserver();


  const benefits = [
    'Pre-vetted fractional executives',
    'Industry-specific expertise',
    'Flexible engagement models',
    'Proven track record',
    'Quick onboarding process'
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
                        <PhoneCallIcon className="h-6 w-6 text-blue-500" />
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
                        <Mail className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Email Us</h4>
                        <p className="text-gray-600">
                          Send us your questions at{' '}
                          <a href="mailto:hello@getexpertify.com" className="text-blue-600 hover:underline">
                            hello@getexpertify.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Zap className="h-6 w-6 text-green-500" />
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
                    {benefits.map((benefit, idx) => (
                      <div className="flex items-center gap-3" key={idx}>
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section> 
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
