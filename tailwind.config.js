/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-vector': "url('$lib/assets/background-vector.svg')"
      }
    },
    colors: {
      'background': '#090909',
      'blurGray': 'rgba(217,217,217,0.12)',
      'border': '#878787',
      'text': '#CCCCCC'
    },
    fontFamily: {
      'space': 'Space Grotesk, sans-serif'
    }
  },
  plugins: []
};