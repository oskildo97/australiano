/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {

      'iris-black': '#1E1E1E',
      'iris-gray-1': '#5C5C5C',
      'iris-gray-2': '#8E8E8E',
      'iris-gray-3': '#979797',
      'iris-white-1': '#EFEFEF',
      'iris-white-2': '#F5F5F5',
      'iris-white-3': '#FCFCFC',
      'iris-orange': '#EE983C',
      'iris-yellow': '#F1CA30',
      'iris-yellow2':'#EE983C',
      'iris-green': '#18CC55',
      'iris-green-soft': '#D8F5C3;',
      'iris-green-softer' :'#D0ECF2',
      'iris-red': '#C7374E',
      'iris-pink': '#C63D7A',
      'iris-blue': '#2F5190',
      'iris-super-light-blue': '#F5F6FA',
      'iris-dark-blue-1': '#2F5190',
      'iris-dark-blue-2': '#14336B',
      'iris-link': '#3C7FFB',
      'iris-teal': '#46A3C0',
      'iris-soft': '#C5CFE0',
      'iris-soft-purple': '#BD69F6',
      'iris-affair': '#714693',
      'iris-akaroa': '#D4C4A8',
      'iris-algae-green': '#93DFB8',
      'iris-allports': '#0076A3',
      'iris-antique-brass': '#C88A65',
      'iris-biloba-flower': '#B2A1EA',
      'iris-aquamarine': '#7FFFD4',
      'iris-au-chico': '#97605D',
      'iris-bandicoot': '#858470',
      //Gradients
      'grad-login-start': '#013673',
      'grad-login-end': '#165898',
    }
  },
  variants: {
    extend: {
        opacity: ['disabled'],
    },
  },
  plugins: [],
}
