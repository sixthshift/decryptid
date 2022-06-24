import PropTypes from 'prop-types';
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  radius: 30,
  spacing: 0.05,
};

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

const UiContext = createContext();

const useUiContext = () => {
  const context = useContext(UiContext);
  if (context === undefined) {
    throw new Error('useUiContext was used outside of its Provider');
  }
  return context;
};

function UiContextProvider({ children }) {
  return (
    <UiContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </UiContext.Provider>
  );
}

UiContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { UiContext, useUiContext, UiContextProvider };
