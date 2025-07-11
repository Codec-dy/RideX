/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}", // Include all files inside /pages
      "./components/**/*.{js,ts,jsx,tsx}", // Include all files inside /components
      "./app/**/*.{js,ts,jsx,tsx}", // In case you still have app directory
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };