export default (state, action) => {
  if (
    action.type === 'place' &&
    (action.payload.mode === 'cube' || action.payload.mode === 'disc')
  ) {
    return state.map((player) => {
      if (player.colour === action.payload.colour) {
        return {
          ...player,
          [action.payload.mode]: player[[action.payload.mode]] - 1,
        };
      }
      return player;
    });
  }
  if (
    action.type === 'unplace' &&
    (action.payload.mode === 'cube' || action.payload.mode === 'disc')
  ) {
    return state.map((player) => {
      if (player.colour === action.payload.colour) {
        return {
          ...player,
          [action.payload.mode]: player[[action.payload.mode]] + 1,
        };
      }
      return player;
    });
  }
  return state;
};
