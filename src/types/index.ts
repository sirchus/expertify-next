// Common types and interfaces used across the application

export interface NavItem {
  label: string;
  target: string;
}

export interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
  navItems: NavItem[];
}

export interface HeroSectionProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: () => Promise<void>;
  isSubmitting: boolean;
  validationError: string;
  submitStatus: 'idle' | 'success' | 'error';
}

export interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export interface Step {
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'orange';
  title: string;
  description: string;
  features: string[];
}

export interface Service {
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'orange';
  title: string;
  description: string;
  features: string[];
  stats: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
  rating: number;
  image?: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  color: 'blue' | 'green' | 'purple';
}