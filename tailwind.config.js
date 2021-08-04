module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      primary: '#F9FBF2',
      'palette-1': '#FFE0B5',
      'palette-3': '#76949F',
      'palette-4': '#6A6B83',
      'palette-5': '#2C1320',
      white: '#F9FAFB'
    }),
    colors: {
      primary: '#F9FBF2',
      orange: '#FFE0B5',
      gold: '#d4af37',
      green: '#76949F',
      blue: '#6A6B83',
      purple: '#2C1320',
      black: '#111827',
      white: '#F9FAFB'
    },
    fontFamily: { 
      'display': ['Roboto'],
      'body': ['Roboto']
    },
    fontSize: {
        sm: ['9px'],
        md: ['21px'],
        lg: ['27px'],
        xl: ['47px']
    },
    scale: {
      25: '.25',
      50: '.5',
      75: '.75',
      90: '.9',
      100: '1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
//The PLUGINS section allows you to register plugins with Tailwind that can be used to 
//generate extra utilities, components, base styles, or custom variants
//     require('@tailwindcss/forms'),
//     require('@tailwindcss/aspect-ratio'),
//     require('@tailwindcss/typography'),
//     require('tailwindcss-children'),

//It’s important to understand that this prefix is added after any variant prefixes. 
//That means that classes with responsive or state prefixes like sm: or hover: will 
//still have the responsive or state prefix first, with your custom prefix appearing 
//after the colon:
//<div class="tw-text-lg md:tw-text-xl tw-bg-red-500 hover:tw-bg-blue-500">

//That means if you add your own responsive utility like this:
// @variants hover {
//   .bg-brand-gradient { /* ... */ }
// }

//…the generated responsive classes will not have your configured prefix:
// .bg-brand-gradient { /* ... */ }
// .hover\:bg-brand-gradient:hover { /* ... */ }
