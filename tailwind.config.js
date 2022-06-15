const { keys } = require('lodash');

const product = (prefixes, suffixes) => prefixes
  .reduce((acc, prefix) => [...acc, ...suffixes.map((suffix) => [prefix, suffix])], [])
  .map((tuple) => (tuple.join('-')));

const colors = {
  primary: '#53281a',
  secondary: '#fdefd2',
};

const players = {
  alpha: '#fd0012',
  beta: '#089f7d',
  gamma: '#e87501',
  delta: '#8dbedb',
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

const gradientColours = {
  'gradient-1': '#ffdd8e',
  'gradient-2': '#fdefd2',
  'gradient-3': '#ffdd8e',
};

module.exports = {
  content: ['./src/*.html', './src/**/*.jsx'],
  theme: {
    colors: {
      ...colors,
      ...players,
      ...structures,
      ...terrains,
      ...territories,
    },
    extend: {
      keyframes: [
        ['slide-up', 'translateY(100%)'],
        ['slide-down', 'translateY(-100%)'],
        ['slide-left', 'translateX(100%)'],
        ['slide-right', 'translateX(-100%)'],
      ].reduce((acc, animation) => ({
        ...acc,
        [animation[0]]: {
          '0%': { opacity: 0, transform: animation[1] },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateY(0%)' },
        },
      }), {}),
      animation: ['slide-up', 'slide-down', 'slide-left', 'slide-right']
        .reduce((acc, animation) => ({
          ...acc,
          [animation]: `${animation}  var(--animation-slide-delay) ease-out infinite`,
        }), {}),
    },
    gradientColorStops: gradientColours,
  },
  safelist: [
    ...product([
      'bg',
      'fill',
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
