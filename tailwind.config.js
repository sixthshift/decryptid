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
    extend: {},
    gradientColorStops: gradientColours,
  },
  plugins: [],
};
