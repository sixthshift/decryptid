export default (state, action) => {
  if (action.type === 'place' && (action.payload.mode === 'shack' || action.payload.mode === 'stone')) {
    return state.map((structure) => {
      if (structure.colour === action.payload.colour) {
        return {
          ...structure,
          [action.payload.mode]: structure[[action.payload.mode]] - 1,
        };
      }
      return structure;
    });
  }
  if (action.type === 'unplace' && (action.payload.mode === 'shack' || action.payload.mode === 'stone')) {
    return state.map((structure) => {
      if (structure.colour === action.payload.colour) {
        return {
          ...structure,
          [action.payload.mode]: structure[[action.payload.mode]] + 1,
        };
      }
      return structure;
    });
  }
  return state;
};
