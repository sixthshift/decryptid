import PropTypes from 'prop-types';
import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducers';

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
    <GameContext.Provider value={useReducer(reducer, reducer(undefined, { type: undefined }))}>
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
