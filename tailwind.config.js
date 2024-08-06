/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    theme: {
      extend: {
        height: {
          screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
        },
        screens: {
          mobile: { max: '1024px' },
          // => @media (max-width: 768px) { ... }

          desktop: { min: '400px' },
          // => @media (min-width: 1025px) { ... }
        },
      }
    }
  },
  plugins: [],
}

