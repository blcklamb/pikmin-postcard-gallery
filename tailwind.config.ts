import type { Config } from "tailwindcss";

const config: Config = {
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
        "p-green": "var(--pikmin-green)",
        "p-organge": "var(--pikmin-orange)",
        "p-gray": "var(--pikmin-gray)",
      },
    },
  },
  plugins: [],
};
export default config;
