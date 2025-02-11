import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#222020',
        customPurple: '#352354',
        customLightPurple: '#553EB7',
      },
      backgroundImage: {
        'radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'radial-from-purple-to-black': 'radial-gradient(circle, #352354, #222020)',
      },
      boxShadow: {
        'custom-light': '3px 2px 11px rgba(85, 62, 183, 1)',
        'custom-medium': '0 4px 8px rgba(0, 0, 0, 0.2)',
        'custom-dark': '0 8px 16px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;