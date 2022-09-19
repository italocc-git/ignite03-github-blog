module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      sm: { min: '320px', max: '734px' },
      md: { min: '735px', max: '1000px' },
      lg: { max: '1300px' },
      xl: '1300px',
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        baloo: ['Baloo 2', 'sans-serif'],
      },
      colors: {
        product: {
          blue: '#3294F8',

        },
        base: {
          title: '#E7EDF4',
          subtitle: '#C4D4E3',
          text: '#AFC2D4',
          label: '#3A536B',
          input: '#040F1A',
          background: '#071422',
          span: '#7B96B2',
          border: '#1C2F41',
          post: '#112131',
          profile: '#0B96B2',
        },
      },
      borderRadius: {
        md: '4px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
