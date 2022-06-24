import boardReducer from './boardReducer';
import playerReducer from './playerReducer';
import structureReducer from './structureReducer';

export default (state, action) => ({
  board: boardReducer(state.board, action),
  player: playerReducer(state.players, action),
  structure: structureReducer(state.structures, action),
});
