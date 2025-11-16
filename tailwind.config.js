/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // Primary: Teal (trust, technology, peace)
      primary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#0d9488', // Main teal
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
      },
      // Accent: Amber (energy, positivity)
      accent: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b', // Main amber
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      },
      // Secondary: Purple (advocacy, creativity)
      secondary: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7', // Main purple
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
      },
      // Neutrals: Professional balance
      neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
      // Keep default colors for common utilities
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        saira: ['Saira', 'Inter', 'Segoe UI', 'sans-serif'],
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        heading: ['Poppins', 'Saira', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

