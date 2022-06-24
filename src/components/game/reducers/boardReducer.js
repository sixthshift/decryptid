import { partition, zip } from 'lodash';

export default (state, action) => {
  if (action.type === 'FLIP') {
    const id = action.payload;
    const [tile, hexes] = partition(state, (hex) => (hex.tile === id));
    const reversedCoordinates = tile.map((hex) => (hex.coordinates)).reverse();
    return [
      ...hexes,
      ...zip(tile, reversedCoordinates).map(([hex, coordinates]) => ({ ...hex, coordinates })),
    ];
  }
  return state;
};
