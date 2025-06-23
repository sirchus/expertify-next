// src/app/success/page.tsx
import React from 'react';
import Link from 'next/link';
import { FormLayout } from '@/components/forms/FormLayout';
import { CheckCircle, ArrowLeft, Mail, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Application Submitted | Expertify',
  description: 'Thank you for your application. We\'ll be in touch soon.',
};

export default function SuccessPage() {
  return (
    <FormLayout
      title="Application Submitted Successfully!"
      description="Thank you for your interest in Expertify. We've received your application."
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="text-center p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              We&#39;ve received your application!
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team will review your application and get back to you within 48 hours. 
              In the meantime, feel free to explore more about what we do.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <Mail className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Email Confirmation</h3>
                <p className="text-sm text-gray-600">Check your inbox for a confirmation email</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Next Steps</h3>
                <p className="text-sm text-gray-600">We'll schedule a call if you're a good fit</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </Link>
              
              <a
                href="mailto:hello@getexpertify.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <Mail className="h-5 w-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}