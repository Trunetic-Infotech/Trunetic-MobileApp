/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}", "./index.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #081129, #1B3B8F)",
      },
    },
  },
  plugins: [],
};
