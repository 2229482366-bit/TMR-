/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6',
        primary: '#D97757',
        textMain: '#4A4036',
        textMuted: '#8C857D',
        warm: {
          bg: '#FAF9F6',
          card: '#FFFFFF',
          primary: '#D97757',
          accent: '#E6CBA8',
          title: '#4A4036',
          text: '#8C857D',
        },
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        card: '1.25rem',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
