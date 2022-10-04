/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      {
        stimma: {
          primary: '#ffe595',
          secondary: '#ffefc0',
          accent: '#ff4a55',
          neutral: '#18182F',
          'base-100': '#fff',
          info: '#289AE6',
          success: '#3CD3C1',
          warning: '#B89214',
          error: '#E22248',

          '--rounded-box': 0, // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': 0, // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': 0, // border radius rounded-badge utility class, used in badges and similar
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
