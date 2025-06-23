// src/config/forms.ts
import type { FormConfig } from '@/types/forms';

export const expertFormConfig: FormConfig = {
  id: 'expert-application',
  title: 'Join Our Expert Network',
  description: 'Apply to become a fractional executive in our exclusive network',
  submitEndpoint: '/api/forms/expert',
  successMessage: 'Thank you for applying! We\'ll review your application and get back to you within 48 hours.',
  successRedirect: '/',
  submitButtonText: 'Submit Application',
  steps: [
    {
      id: 'personal-info',
      title: 'Personal Information',
      description: 'Tell us about yourself',
      fields: [
        {
          id: 'First-Name',
          label: 'First Name',
          type: 'text',
          required: true,
          placeholder: 'e.g., Chris'
        },
        {
          id: 'Last-Name',
          label: 'Last Name',
          type: 'text',
          required: true,
          placeholder: 'e.g., Judson'
        },
        {
          id: 'Email-Address',
          label: 'Email Address',
          type: 'email',
          required: true,
          placeholder: 'e.g., name@company.com'
        },
        {
          id: 'LinkedIn',
          label: 'LinkedIn Profile',
          type: 'text',
          required: true,
          placeholder: 'URL or username'
        },
        {
          id: 'Website',
          label: 'Website (optional)',
          type: 'text',
          required: false,
          placeholder: 'Optional personal or business site'
        }
      ]
    },
    {
      id: 'experience',
      title: 'Experience & Background',
      description: 'Share your professional experience',
      fields: [
        {
          id: 'Experience',
          label: 'Tell us about yourself?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g., career highlights, industry specialisation, consulting experience'
        },
        {
          id: 'Function',
          label: 'Functional area',
          type: 'dropdown',
          required: true,
          options: [
            'Product',
            'Marketing', 
            'Sales',
            'Growth',
            'Customer',
            'Technology',
            'Engineering',
            'Operations',
            'Other'
          ]
        },
        {
          id: 'Seniority',
          label: 'Experience',
          type: 'dropdown',
          required: true,
          options: [
            'C-level',
            'VP',
            'Director',
            'Head of'
          ]
        }
      ]
    },
    {
      id: 'availability',
      title: 'Availability & Additional Info',
      description: 'Let us know your availability and any additional information',
      fields: [
        {
          id: 'Availability',
          label: 'What\'s your availability?',
          type: 'text',
          required: true,
          placeholder: 'Number of days per week'
        },
        {
          id: 'Rate',
          label: 'What\'s your rate?',
          type: 'dropdown',
          required: true,
          options: [
            '~$1,000/day',
            '$1,001–$1,250/day',
            '$1,251–$1,500/day',
            '$1,501–$2,000/day',
            '$2,000+/day'
          ]
        },
        {
          id: 'Notes-talent',
          label: 'Additional info (optional)',
          type: 'textarea',
          required: false,
          placeholder: 'e.g., link to portfolio, website, or Loom recording'
        },
        {
          id: 'Referral',
          label: 'How did you hear about us?',
          type: 'dropdown',
          required: true,
          options: [
            'One of my VCs',
            'LinkedIn',
            'Google',
            'Email outreach',
            'Coach',
            'Blog',
            'Other'
          ]
        }
      ]
    }
  ]
};

export const talentFormConfig: FormConfig = {
  id: 'talent-request',
  title: 'Find Your Perfect Executive',
  description: 'Tell us what you need and we\'ll match you with the right expert',
  submitEndpoint: '/api/forms/client',
  successMessage: 'Thank you! We\'ll review your requirements and get back to you with matches within 48 hours.',
  successRedirect: '/',
  submitButtonText: 'Submit Request',
  steps: [
    {
      id: 'company-info',
      title: 'Company Information',
      description: 'Tell us about your company',
      fields: [
        {
          id: 'Your-Name',
          label: 'Your Name',
          type: 'text',
          required: true
        },
        {
          id: 'Job-Title',
          label: 'Job Title',
          type: 'text',
          required: true
        },
        {
          id: 'Email-Address',
          label: 'Email Address',
          type: 'email',
          required: true
        },
        {
          id: 'Business-Name',
          label: 'Business Name',
          type: 'text',
          required: true
        },
        {
          id: 'Industry',
          label: 'Industry',
          type: 'text',
          required: true
        }
      ]
    },
    {
      id: 'business-details',
      title: 'Business Details',
      description: 'Help us understand your business stage and size',
      fields: [
        {
          id: 'Annual-Revenue',
          label: 'Annual Revenue',
          type: 'dropdown',
          required: true,
          options: [
            '$1M - $10M',
            '$10M - $25M',
            '$25M - $50M',
            '$50M - $100M',
            '$100M+',
            'Public'
          ]
        },
        {
          id: 'Business-Stage',
          label: 'Business Stage',
          type: 'dropdown',
          required: true,
          options: [
            'Pre-seed',
            'Seed',
            'Series A',
            'Series B',
            'Series C',
            'Series D+',
            'Public'
          ]
        },
        {
          id: 'Fractional-Role',
          label: 'Fractional Role to Fill',
          type: 'dropdown',
          required: true,
          options: [
            'Product',
            'Product Marketing',
            'Sales / RevOps',
            'Marketing',
            'Growth',
            'Customer',
            'People',
            'Finance',
            'Operations',
            'Other'
          ]
        },
        {
          id: 'Specific-Skills',
          label: 'Specific Skills or Expertise Needed',
          type: 'textarea',
          required: false,
          placeholder: 'User entered keywords, e.g. "B2B SaaS, Product Strategy"'
        }
      ]
    },
    {
      id: 'engagement-details',
      title: 'Engagement Details',
      description: 'Let us know your preferences and budget',
      fields: [
        {
          id: 'Remote-Hybrid-Local',
          label: 'Remote, Hybrid or Local?',
          type: 'dropdown',
          required: true,
          options: [
            'Remote',
            'In-Person',
            'Hybrid'
          ]
        },
        {
          id: 'Ideal-Start-Date',
          label: 'Ideal Start Date',
          type: 'dropdown',
          required: true,
          options: [
            'ASAP',
            '< 1 month',
            'In the next 1-3 months',
            'Next quarter'
          ]
        },
        {
          id: 'Days-Per-Week',
          label: 'Days per Week',
          type: 'dropdown',
          required: true,
          options: [
            '1 day a week',
            '2-3 days a week',
            '4-5 days per week',
            'Project-based',
            'Not sure — guide me'
          ]
        },
        {
          id: 'Budget',
          label: 'Budget for This Role',
          type: 'dropdown',
          required: true,
          options: [
            '~$1,000 per day',
            '$1,001 - $1,250 per day',
            '$1,251 - $1,500 per day',
            '$1,501 - $2,000 per day',
            '$2,000~ per day'
          ]
        },
        {
          id: 'How-Did-You-Hear',
          label: 'How Did You Hear About Us?',
          type: 'dropdown',
          required: true,
          options: [
            'One of my VCs/investors',
            'LinkedIn',
            'Google search',
            'An email outreach',
            'Through a coach or mentor',
            'Word of mouth',
            'Blog',
            'Other'
          ]
        }
      ]
    }
  ]
};

export const getFormConfig = (type: 'expert' | 'talent'): FormConfig => {
  return type === 'expert' ? expertFormConfig : talentFormConfig;
};