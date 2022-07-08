import config from '../../../config';
import board from './board';
import players from './players';
import structures from './structures';

const initialState = config;

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => ({
  board: board(state?.board, action),
  players: players(state?.players, action),
  structures: structures(state?.structures, action),
});
