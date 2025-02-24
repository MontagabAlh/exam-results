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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      xs: '350px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1024px',
      xxl: '1200px',
      xxxl: '1400px'
    },
    fontFamily: {
      cairo: ['var(--font-cairo)', 'sans-serif'],
    }
  },
  plugins: [],
} satisfies Config;
