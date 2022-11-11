import { solve } from '../../decrypter/solver';

export default (state, action) => {
  if (action.type === 'solve') {
    return solve(action.payload);
  }
  return state;
};
