import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        hepta: ["Hepta Slab", "serif"],
      },
    },
    plugins: [],
  },
} as Config;
