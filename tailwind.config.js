/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: '#001475',
        brandGreen: '#4ba800',
        brandGray: '#404040',
        brandMist: '#eef3ff',
        brandLimeMist: '#eef8e6',
      },
      fontFamily: {
        display: ['"Franklin Gothic Heavy"', '"Franklin Gothic Demi"', '"Arial Narrow Bold"', 'sans-serif'],
        body: ['"Century Gothic"', 'Tahoma', 'Geneva', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 60px rgba(0, 20, 117, 0.12)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
