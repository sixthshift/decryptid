import config from '../../../config';
import board from './board';
import players from './players';
import ruleset from './ruleset';
import structures from './structures';

const initialState = {
  ...config,
  ruleset: config.ruleset.map((rule) => ({
    ...rule,
    solution: {},
  })),
};

export default (state = initialState, action) => {
  const next = {
    board: board(state?.board, action),
    players: players(state?.players, action),
    structures: structures(state?.structures, action),
    ruleset: ruleset(state?.ruleset, action),
  };
  // Keep the same reference when no slice changed, so consumers depending on
  // `game` identity (e.g. the decrypt effect) don't see a spurious change.
  if (
    state &&
    next.board === state.board &&
    next.players === state.players &&
    next.structures === state.structures &&
    next.ruleset === state.ruleset
  ) {
    return state;
  }
  return next;
};
