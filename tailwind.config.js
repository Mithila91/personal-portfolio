/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customLightPurple: '#553EB7',
      },
      boxShadow: {
        'custom-light': '0 0 10px rgba(85, 62, 183, 0.5)',
      },
    },
  },
  plugins: [],
} 