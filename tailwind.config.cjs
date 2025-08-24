/********************
 * Tailwind Config  *
 ********************/
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        background: {
          DEFAULT: '#0a0a0a',
          subtle: '#111111',
          elevated: '#141414'
        },
        foreground: {
          DEFAULT: '#fafafa',
          muted: '#d4d4d4',
          subtle: '#9ca3af'
        },
        border: '#1f1f1f'
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(255,255,255,0.05), 0 0 0 1px rgba(255,255,255,0.03)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
};
