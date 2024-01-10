import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        accent: '#FF6F61',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
