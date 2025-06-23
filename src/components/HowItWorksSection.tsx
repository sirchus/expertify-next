import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Target size={24} />,
      color: 'blue',
      title: 'Tell us what you need',
      description: 'Share the role, skills, and duration you\'re looking for. We\'ll do the rest.'
    },
    {
      icon: <Users size={24} />,
      color: 'green',
      title: 'Meet your matches',
      description: 'We connect you with pre-vetted experts who fit your needs and culture.'
    },
    {
      icon: <Zap size={24} />,
      color: 'purple',
      title: 'Scale with confidence',
      description: 'Start working with a trusted expert in days, not weeks.'
    }
  ];

  return (
    <section id="how" className="py-20 px-4 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">How Expertify Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get matched with top fractional executives in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-${step.color}-100 text-${step.color}-600`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;