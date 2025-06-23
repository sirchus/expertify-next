export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'dropdown';
  required: boolean;
  placeholder?: string;
  description?: string;
  options?: string[];
}

export interface FormStep {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
}

export interface FormConfig {
  id: string;
  title: string;
  description: string;
  steps: FormStep[];
  submitEndpoint: string;
  successMessage: string;
  successRedirect?: string;
  submitButtonText: string;
}

export interface FormData {
  [key: string]: string | undefined;
}

export interface FormErrors {
  [key: string]: string;
}

export type FormType = 'expert' | 'talent';