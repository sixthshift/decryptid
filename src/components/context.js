import { createContext } from 'react';

const initialState = {};

const reducer = (state, action) => {
  if (action?.type === 'select') {
    if (action.payload === state.selected) {
      return { ...state, selected: null };
    }
    return { ...state, selected: action.payload };
  } if (action?.type === 'tile') {
    if (state.mode === 'tile') {
      return { ...state, mode: null };
    }
    return { ...state, mode: 'tile' };
  }

  return state;
};

const context = createContext();

export default context;

export { initialState, reducer };
