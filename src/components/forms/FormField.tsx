// src/components/forms/FormField.tsx
'use client';

import React from 'react';
import type { FormField as FormFieldType } from '@/types/forms';

interface FormFieldProps {
  field: FormFieldType;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ field, value, onChange, error }) => {
  const baseClasses = "w-full px-4 py-3 border rounded-lg transition-all outline-none";
  const normalClasses = "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const errorClasses = "border-red-300 focus:ring-2 focus:ring-red-500 focus:border-transparent";
  
  const fieldClasses = `${baseClasses} ${error ? errorClasses : normalClasses}`;

  const renderField = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            id={field.id}
            name={field.id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={`${fieldClasses} min-h-[120px] resize-vertical`}
            required={field.required}
            rows={4}
          />
        );
      
      case 'dropdown':
        return (
          <select
            id={field.id}
            name={field.id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={fieldClasses}
            required={field.required}
          >
            <option value="">Select an option...</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      
      case 'email':
        return (
          <input
            type="email"
            id={field.id}
            name={field.id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={fieldClasses}
            required={field.required}
          />
        );
      
      default:
        return (
          <input
            type="text"
            id={field.id}
            name={field.id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={fieldClasses}
            required={field.required}
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderField()}
      {field.description && (
        <p className="text-sm text-gray-500">{field.description}</p>
      )}
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};