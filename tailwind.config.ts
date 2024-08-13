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
        primary: "var(--primary)",
        success: "var(--success)",
        error: "var(--error)",
        foreground: "var(--foreground)",
        background: "var(--background)",
        "background-darker": "var(--background-darker)",
      },
    },
  },
  plugins: [],
};
export default config;
