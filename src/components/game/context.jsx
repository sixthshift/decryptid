import React, { createContext, useContext, useReducer } from 'react';
import config from '../../config';
import { childrenPropType } from './prop-types';
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
  children: childrenPropType.isRequired,
};

export { GameContext, useGameContext, GameContextProvider };
