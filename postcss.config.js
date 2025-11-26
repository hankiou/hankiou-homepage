export default {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        '>0.2%',
        'not dead',
        'not op_mini all',
        'iOS >= 10',
        'Safari >= 10'
      ],
      flexbox: 'no-2009',
      grid: 'autoplace'
    }
  }
}
