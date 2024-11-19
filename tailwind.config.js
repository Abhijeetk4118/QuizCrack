/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'bright-coral': '#FF6B6B',
        'cool-aqua': '#4ECDC4',
        'soft-lemon': '#FFE66D',
        
        // Secondary/Neutral Colors
        'midnight-blue': '#1A535C',
        'light-cream': '#F7FFF7',
        'charcoal-gray': '#2D2D2D',

        // Gradient (for example purposes)
        'gradient-coral-aqua': {
          DEFAULT: 'linear-gradient(to right, #FF6B6B, #4ECDC4)',
        },
      },
    },
  },
  plugins: [],
}

