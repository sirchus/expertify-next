'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { FormField } from './FormField';
import { StepIndicator } from './StepIndicator';
import { FormButtons } from './FormButtons';
import type { FormConfig, FormData, FormErrors } from '@/types/forms';

interface MultiStepFormProps {
  config: FormConfig;
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({ config }) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentStepData = config.steps[currentStep - 1];
  const stepTitles = config.steps.map(step => step.title);

  const validateField = useCallback((fieldId: string, value: string, isRequired: boolean): string => {
    if (isRequired && !value.trim()) {
      return 'This field is required';
    }
    
    if (fieldId.includes('Email') && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }
    
    if (fieldId.includes('LinkedIn') && value) {
      const isValidLinkedIn = value.includes('linkedin.com') || value.includes('in/') || !value.includes('http');
      if (!isValidLinkedIn && value.includes('http')) {
        return 'Please enter a valid LinkedIn URL or username';
      }
    }
    
    return '';
  }, []);

  const validateCurrentStep = useCallback((): boolean => {
    const stepErrors: FormErrors = {};
    let isValid = true;

    currentStepData.fields.forEach(field => {
      const value = formData[field.id] || '';
      const error = validateField(field.id, value, field.required);
      
      if (error) {
        stepErrors[field.id] = error;
        isValid = false;
      }
    });

    setErrors(stepErrors);
    return isValid;
  }, [currentStepData.fields, formData, validateField]);

  const handleFieldChange = useCallback((fieldId: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
    
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors(prev => ({ ...prev, [fieldId]: '' }));
    }
  }, [errors]);

  const handleNext = useCallback(() => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, config.steps.length));
    }
  }, [validateCurrentStep, config.steps.length]);

  const handlePrevious = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setErrors({}); // Clear errors when going back
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!validateCurrentStep()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(config.submitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: config.id,
          data: formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Show success message or redirect
        alert(config.successMessage);
        if (config.successRedirect) {
          router.push(config.successRedirect);
        }
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Something went wrong. Please try again.'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [validateCurrentStep, config, formData, router]);

  const canProceed = currentStepData.fields
    .filter(field => field.required)
    .every(field => formData[field.id]?.trim());

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{config.title}</h1>
          <p className="text-gray-600">{config.description}</p>
        </div>

        {/* Form Content */}
        <div className="px-8 py-6">
          <StepIndicator
            currentStep={currentStep}
            totalSteps={config.steps.length}
            stepTitles={stepTitles}
          />

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {currentStepData.title}
            </h2>
            {currentStepData.description && (
              <p className="text-gray-600 mb-6">{currentStepData.description}</p>
            )}

            <div className="space-y-6">
              {currentStepData.fields.map((field) => (
                <FormField
                  key={field.id}
                  field={field}
                  value={formData[field.id] || ''}
                  onChange={(value) => handleFieldChange(field.id, value)}
                  error={errors[field.id]}
                />
              ))}
            </div>
          </div>

          <FormButtons
            currentStep={currentStep}
            totalSteps={config.steps.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            canProceed={canProceed}
            submitButtonText={config.submitButtonText}
          />
        </div>
      </div>
    </div>
  );
};