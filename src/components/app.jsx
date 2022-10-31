import React from 'react';
import '../stylesheet.css';
import { GameContextProvider } from './context';
import Game from './game';
import ClueMenu from './menu/clue';
import MapMenu from './menu/map';

function App() {
  return (
    <div className="flex flex-col justify-center w-full h-full bg-secondary touch-none">
      <div className="gap-8 items-center p-4 w-full h-full auto-rotate-invert">
        <GameContextProvider>
          <MapMenu />
          <Game />
          <ClueMenu />
        </GameContextProvider>
      </div>
    </div>
  );
}

export default App;
