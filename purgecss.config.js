module.exports = {
  content: [
    'pages/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}',
    'data/**/*.{js,jsx,ts,tsx}'
  ],
  css: ['./node_modules/greencss/css/minified/greencss.css'],
  keyframes: true,
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  output: './css/green.css'
}
