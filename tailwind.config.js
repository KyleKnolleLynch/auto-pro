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
        bkg: 'hsl(var(--clr-bkg) / <alpha-value>)',
        content: 'hsl(var(--clr-content) / <alpha-value>)',
        accent: {
          1: 'hsl(var(--clr-accent1) / <alpha-value>)',
          2: 'hsl(var(--clr-accent2) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}
