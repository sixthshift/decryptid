const { keys } = require('lodash');

const product = (prefixes, suffixes) => prefixes
  .reduce((acc, prefix) => [...acc, ...suffixes.map((suffix) => [prefix, suffix])], [])
  .map((tuple) => (tuple.join('-')));

const colors = {
  primary: '#464b2d',
  secondary: '#dedeca',
  tertiary: '#d0d0b4',
  accent: '#dc4d01',
};

const players = {
  alpha: '#fd0012',
  beta: '#089f7d',
  gamma: '#8dbedb',
  delta: '#e87501',
  epsilon: '#9d3ed8',
};

const structures = {
  black: '#555555',
  white: '#cecece',
  green: '#00752d',
  blue: '#1d5a94',
};

const terrains = {
  desert: '#f1c242',
  forest: '#6a994f',
  mountain: '#aca391',
  swamp: '#6d4f5f',
  water: '#58849d',
};

const territories = {
  cougar: '#de2215',
  bear: '#000000',
};
module.exports = {
  content: ['./src/*.html', './src/**/*.jsx'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors,
      ...players,
      ...structures,
      ...terrains,
      ...territories,
    },
    animation: {
      pulse: "pulse 2s linear infinite"
    },
    keyframes: {
      pulse: {
        '0%, 100%': {
          opacity: '0'
        },
        '10%': {
          opacity: '1',
        },
      }
    },
  },
  safelist: [
    ...product([
      'bg',
      'fill',
      'stroke',
      'text',
    ], [
      ...keys(colors),
      ...keys(players),
      ...keys(structures),
      ...keys(terrains),
      ...keys(territories),
    ]),
  ],
  plugins: [],
};
