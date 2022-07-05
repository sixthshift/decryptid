import config from '../../../config';
import board from './board';
import player from './player';
import structure from './structure';

const initialState = config;

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => ({
  board: board(state?.board, action),
  player: player(state?.players, action),
  structure: structure(state?.structures, action),
});
