/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'custom': ['Your Custom Font Name', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

