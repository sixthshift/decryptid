import PropTypes from 'prop-types';
import React, { createContext, useContext, useReducer } from 'react';
import config from '../../config';
import reducer from './reducers';

const state = config;

const GameContext = createContext();

const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext was used outside of its Provider');
  }
  return context;
};

function GameContextProvider({ children }) {
  return (
    <GameContext.Provider value={useReducer(reducer, state)}>
      {children}
    </GameContext.Provider>
  );
}

GameContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { GameContext, useGameContext, GameContextProvider };
