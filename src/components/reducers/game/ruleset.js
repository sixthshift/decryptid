import { isEqual } from 'lodash';

export default (state, action) => {
  if (action.type === 'solve') {
    // The solve effect re-dispatches whenever `game` changes; return the same
    // reference when the result is unchanged so it can converge instead of
    // looping forever.
    return isEqual(state, action.payload) ? state : action.payload;
  }
  return state;
};
