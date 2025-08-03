/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@vidstack/react/tailwind.cjs')({
      // Optimize output by specifying player selector.
      selector: '.media-player',
      // Change the media variants prefix.
      prefix: 'media',
    }),
  ],
};
