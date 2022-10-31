import { partition, sortBy, zip } from 'lodash';

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
  }
  if (action.type === 'switch') {
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

  if (action.type === 'place' || action.type === 'unplace') {
    let entity;
    if (action.payload.mode === 'cube' || action.payload.mode === 'disc') {
      entity = 'clues';
    } else if (action.payload.mode === 'shack' || action.payload.mode === 'stone') {
      entity = 'structures';
    }
    return state.map((hex) => {
      if (
        hex.coordinates.q === action.payload.coordinates.q
          && hex.coordinates.r === action.payload.coordinates.r
          && hex.coordinates.s === action.payload.coordinates.s
      ) {
        let entities = [];
        if (action.type === 'place') {
          entities = sortBy([
            ...hex[entity],
            { type: action.payload.mode, colour: action.payload.colour },
          ], JSON.stringify);
        } else if (action.type === 'unplace') {
          entities = sortBy(hex[entity].filter(
            (clue) => (!(clue.type === action.payload.mode && clue.colour === action.payload.colour)),
          ), JSON.stringify);
        }
        return { ...hex, [entity]: entities };
      }
      return hex;
    });
  }

  return state;
};
