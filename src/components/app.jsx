import React, { useReducer } from 'react';
import '../stylesheet.css';
import Context, { initialState, reducer } from './context';
import Game from './game';
import HintMenu from './menu/hint';
import MapMenu from './menu/map';

function App() {
  const context = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col justify-center w-full min-w-sm h-full bg-gradient-to-br from-gradient-1 via-gradient-2 to-gradient-3">
      <div className="gap-8 items-center p-4 w-full h-full auto-rotate-invert">
        <Context.Provider value={context}>
          <MapMenu />
          <Game />
          <HintMenu />
        </Context.Provider>
      </div>
    </div>
  );
}

export default App;
