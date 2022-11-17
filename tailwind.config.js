const { keys } = require('lodash');

const product = (prefixes, suffixes) => prefixes
  .reduce((acc, prefix) => [...acc, ...suffixes.map((suffix) => [prefix, suffix])], [])
  .map((tuple) => (tuple.join('-')));

const colors = {
  primary: '#464b2d',
  secondary: '#dedeca',
  tertiary: '#c4844c',
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
          [animation]: `${animation}  var(--animation-slide-delay) ease-out`,
        }), {}),
      minWidth: {
        sm: '40rem',
      },
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
