import config from '../../../config';
import board from './board';
import players from './players';
import ruleset from './ruleset';
import structures from './structures';

const initialState = {
  ...config,
  ruleset: config.ruleset.map((rule) => ({
    ...rule,
    solution: config.players.reduce((acc, player) => {
      acc[player.colour] = true;
      return acc;
    }, {}),
  })),
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => ({
  board: board(state?.board, action),
  players: players(state?.players, action),
  structures: structures(state?.structures, action),
  ruleset: ruleset(state?.ruleset, action),
});
