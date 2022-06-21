module.exports = {
  content: [
    'pages/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    'data/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}'
  ],
  css: ['./styles/greenCSS.css'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: {
    greedy: [
      /red$/,
      /orange$/,
      /yellow$/,
      /green$/,
      /greencss$/,
      /blue$/,
      /turquoise$/,
      /purple$/,
      /magenta$/,
      /black$/,
      /transparent$/,
      /white$/
    ]
  },
  output: './css/green.css'
}
