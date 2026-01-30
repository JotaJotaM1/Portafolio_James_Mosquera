module.exports = {
  darkMode: 'class',
  content: ['./index.html', './**/*.{ts,tsx,js,jsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        'primary-hover': '#6d28d9',
        'background-light': '#f8fafc',
        'background-dark': '#0f172a',
        'surface-light': '#ffffff',
        'surface-dark': '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(124, 58, 237, 0.15)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
