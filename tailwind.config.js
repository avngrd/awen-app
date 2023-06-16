/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        '3xl': '13px 15px 25px rgba(29, 9, 255, 0.85) ',
        '4xl': '1px -15px 30px rgba(29, 9, 255, 0.85) ',
      },
      boxShadow: {
        '3xl': '-5px 15px 40px -14px rgba(29, 9, 255, 0.5)',
      },
    },
  },
  plugins: [],
};
