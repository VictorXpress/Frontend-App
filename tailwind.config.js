/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primario': '#15803D',
        'primary': '#15803D',
        'secondary': '#6FA5C5',
        'accent': '#1E293B',
        
      },
    },
  },
  plugins: [],
}
