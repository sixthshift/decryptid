import { partition, zip } from 'lodash';

export default (state, action) => {
  if (action.type === 'flip') {
    const id = action.payload;
    const [tile, hexes] = partition(state, (hex) => (hex.tile === id));
    const reversedCoordinates = tile.map((hex) => (hex.coordinates)).reverse();
    return [
      ...hexes,
      ...zip(tile, reversedCoordinates)
        .map(([hex, coordinates]) => ({ ...hex, coordinates }))
        .reverse(),
    ];
  } if (action.type === 'switch') {
    const { idA, idB } = action.payload;
    const [tiles, hexes] = partition(state, (hex) => (hex.tile === idA || hex.tile === idB));
    const tileA = tiles.filter((hex) => hex.tile === idA);
    const tileB = tiles.filter((hex) => hex.tile === idB);
    return [
      ...hexes,
      ...zip(tileA, tileB)
        .map(([hexA, hexB]) => ([
          { ...hexA, coordinates: hexB.coordinates },
          { ...hexB, coordinates: hexA.coordinates },
        ])).flat(),
    ];
  }
  return state;
};
