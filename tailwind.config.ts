import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
    screens: {
      "max-320": { max: "320px" },
      "max-375": { max: "375px" },
      "max-425": { max: "425px" },
    }
  },
  plugins: [],
} satisfies Config;
