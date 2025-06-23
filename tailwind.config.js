/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}", "./index.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      boxShadow: {
        "deep-inset": ` 
          rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
      },
    },
  },
  plugins: [],
};
