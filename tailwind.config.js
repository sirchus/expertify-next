/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // or 'class' if you want manual dark mode control
  theme: {
    extend: {
      // Enhanced responsive breakpoints
      screens: {
        'xs': '475px',      // Extra small devices
        'sm': '640px',      // Small devices
        'md': '768px',      // Medium devices
        'lg': '1024px',     // Large devices
        'xl': '1280px',     // Extra large devices
        '2xl': '1536px',    // 2X Extra large devices
        '3xl': '1920px',    // Ultra wide screens
        
        // Custom breakpoints for specific use cases
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
        
        // Height-based breakpoints
        'h-sm': {'raw': '(min-height: 640px)'},
        'h-md': {'raw': '(min-height: 768px)'},
        'h-lg': {'raw': '(min-height: 1024px)'},
        
        // Orientation breakpoints
        'portrait': {'raw': '(orientation: portrait)'},
        'landscape': {'raw': '(orientation: landscape)'},
        
        // Print media
        'print': {'raw': 'print'},
      },

      // Enhanced animations
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'marquee-slow': 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 10s linear infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-down': 'fade-in-down 0.8s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'slide-down': 'slide-down 0.8s ease-out',
        'slide-left': 'slide-left 0.8s ease-out',
        'slide-right': 'slide-right 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 6s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },

      // Enhanced keyframes
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-subtle': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },

      // Enhanced color palette
      colors: {
        // Custom brand colors
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        
        // Enhanced grays
        gray: {
          25: '#fcfcfd',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },

        // Accent colors for variety
        accent: {
          purple: '#8b5cf6',
          pink: '#ec4899',
          orange: '#f97316',
          green: '#10b981',
          yellow: '#f59e0b',
          red: '#ef4444',
          indigo: '#6366f1',
          teal: '#14b8a6',
        },

        // Success, warning, error states
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
      },

      // Enhanced typography
      fontFamily: {
        sans: [
          'var(--font-geist-sans)',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        mono: [
          'var(--font-geist-mono)',
          'ui-monospace',
          'SFMono-Regular',
          '"SF Mono"',
          'Consolas',
          '"Liberation Mono"',
          'Menlo',
          'monospace',
        ],
        display: [
          'var(--font-geist-sans)',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },

      // Enhanced font sizes with responsive scaling
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        
        // Display sizes
        'display-xs': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        'display-sm': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }],
        'display-md': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '600' }],
        'display-lg': ['3rem', { lineHeight: '3.5rem', fontWeight: '700' }],
        'display-xl': ['3.75rem', { lineHeight: '4.25rem', fontWeight: '700' }],
        'display-2xl': ['4.5rem', { lineHeight: '5rem', fontWeight: '800' }],
      },

      // Enhanced spacing scale
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
        '384': '96rem',
      },

      // Enhanced border radius
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        'full': '9999px',
      },

      // Enhanced shadows
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'none': 'none',
        
        // Custom branded shadows
        'glow': '0 0 20px rgb(59 130 246 / 0.3)',
        'glow-lg': '0 0 30px rgb(59 130 246 / 0.4)',
        'glow-xl': '0 0 40px rgb(59 130 246 / 0.5)',
        'brand': '0 10px 30px -5px rgb(59 130 246 / 0.3)',
        'brand-lg': '0 20px 40px -10px rgb(59 130 246 / 0.4)',
        
        // Colored shadows
        'purple': '0 10px 30px -5px rgb(139 92 246 / 0.3)',
        'pink': '0 10px 30px -5px rgb(236 72 153 / 0.3)',
        'green': '0 10px 30px -5px rgb(16 185 129 / 0.3)',
        'orange': '0 10px 30px -5px rgb(249 115 22 / 0.3)',
      },

      // Enhanced gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-warm': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'gradient-cool': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-forest': 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },

      // Enhanced transitions
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        '2000': '2000ms',
      },

      // Enhanced blur effects
      blur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },

      // Enhanced backdrop blur
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },

      // Enhanced z-index scale
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        'auto': 'auto',
        'sticky': '1020',
        'fixed': '1030',
        'modal': '1040',
        'popover': '1050',
        'tooltip': '1060',
        'toast': '1070',
      },

      // Grid template columns/rows
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
        'auto-fit-sm': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-md': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fit-lg': 'repeat(auto-fit, minmax(350px, 1fr))',
      },

      // Enhanced aspect ratios
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        cinema: '21 / 9',
        golden: '1.618 / 1',
        portrait: '3 / 4',
        landscape: '4 / 3',
        ultrawide: '32 / 9',
      },

      // Typography variants
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(55 65 81)',
            lineHeight: '1.75',
            '--tw-prose-body': 'rgb(55 65 81)',
            '--tw-prose-headings': 'rgb(17 24 39)',
            '--tw-prose-lead': 'rgb(75 85 99)',
            '--tw-prose-links': 'rgb(59 130 246)',
            '--tw-prose-bold': 'rgb(17 24 39)',
            '--tw-prose-counters': 'rgb(107 114 128)',
            '--tw-prose-bullets': 'rgb(209 213 219)',
            '--tw-prose-hr': 'rgb(229 231 235)',
            '--tw-prose-quotes': 'rgb(17 24 39)',
            '--tw-prose-quote-borders': 'rgb(229 231 235)',
            '--tw-prose-captions': 'rgb(107 114 128)',
            '--tw-prose-code': 'rgb(17 24 39)',
            '--tw-prose-pre-code': 'rgb(229 231 235)',
            '--tw-prose-pre-bg': 'rgb(17 24 39)',
            '--tw-prose-th-borders': 'rgb(209 213 219)',
            '--tw-prose-td-borders': 'rgb(229 231 235)',
          },
        },
      },
    },
  },
  plugins: [
    // Custom plugins for enhanced functionality
    function({ addUtilities, addComponents, theme }) {
      // Add custom utilities
      addUtilities({
        // Container queries
        '.container-query': {
          'container-type': 'inline-size',
        },
        
        // Responsive text utilities
        '.text-responsive': {
          'font-size': 'clamp(1rem, 2.5vw, 1.5rem)',
        },
        '.text-responsive-lg': {
          'font-size': 'clamp(1.5rem, 4vw, 3rem)',
        },
        '.text-responsive-xl': {
          'font-size': 'clamp(2rem, 5vw, 4rem)',
        },
        
        // Fluid spacing
        '.space-fluid': {
          'padding': 'clamp(1rem, 5vw, 3rem)',
        },
        '.space-fluid-x': {
          'padding-left': 'clamp(1rem, 5vw, 3rem)',
          'padding-right': 'clamp(1rem, 5vw, 3rem)',
        },
        '.space-fluid-y': {
          'padding-top': 'clamp(1rem, 5vw, 3rem)',
          'padding-bottom': 'clamp(1rem, 5vw, 3rem)',
        },
        
        // Scroll behavior
        '.scroll-smooth': {
          'scroll-behavior': 'smooth',
        },
        '.scroll-auto': {
          'scroll-behavior': 'auto',
        },
        
        // Text selection
        '.select-none': {
          'user-select': 'none',
        },
        '.select-text': {
          'user-select': 'text',
        },
        '.select-all': {
          'user-select': 'all',
        },
        
        // Backdrop filters
        '.backdrop-brightness-90': {
          'backdrop-filter': 'brightness(0.9)',
        },
        '.backdrop-brightness-110': {
          'backdrop-filter': 'brightness(1.1)',
        },
      });

      // Add custom components
      addComponents({
        // Modern button variants
        '.btn-modern': {
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          'border-radius': theme('borderRadius.lg'),
          'font-weight': theme('fontWeight.medium'),
          'transition': 'all 200ms ease',
          'padding': `${theme('spacing.3')} ${theme('spacing.6')}`,
          '&:focus': {
            'outline': 'none',
            'box-shadow': `0 0 0 2px ${theme('colors.blue.500')}`,
          },
        },
        
        // Card variants
        '.card-modern': {
          'background': theme('colors.white'),
          'border-radius': theme('borderRadius.xl'),
          'box-shadow': theme('boxShadow.md'),
          'border': `1px solid ${theme('colors.gray.200')}`,
          'transition': 'all 300ms ease',
          '&:hover': {
            'box-shadow': theme('boxShadow.xl'),
            'transform': 'translateY(-2px)',
          },
        },
        
        // Input variants
        '.input-modern': {
          'width': '100%',
          'padding': `${theme('spacing.3')} ${theme('spacing.4')}`,
          'border': `1px solid ${theme('colors.gray.300')}`,
          'border-radius': theme('borderRadius.lg'),
          'background': theme('colors.white'),
          'transition': 'all 200ms ease',
          '&:focus': {
            'outline': 'none',
            'border-color': theme('colors.blue.500'),
            'box-shadow': `0 0 0 3px ${theme('colors.blue.100')}`,
          },
        },
        
        // Glass morphism
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        
        // Gradient text
        '.text-gradient': {
          'background': `linear-gradient(135deg, ${theme('colors.blue.600')}, ${theme('colors.purple.600')})`,
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
      });
    },
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

export default config;