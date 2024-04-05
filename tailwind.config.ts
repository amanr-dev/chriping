import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        primary: "#EFF6FF",
        secondary: "#93C5FD",
      },
      backgroundColor: {
        main: "#0F172A",
        primary: "#EFF6FF",
        secondary: "#93C5FD",
      },
    },
  },
  plugins: [],
};
export default config;
