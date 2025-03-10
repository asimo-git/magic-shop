import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#882f2f",
        accentHover: "#963b3b",
        cardBtn: "#7f1d1d",
        activeBtn: "#f97316",
      },
    },
  },
  plugins: [],
} satisfies Config;
