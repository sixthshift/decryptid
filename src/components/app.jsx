import React, { useEffect } from 'react';
import pkg from '../../package.json';
import '../stylesheet.css';
import { GameContextProvider } from './context';
import Decrypter from './decrypter';
import Game from './game';
import ClueMenu from './menu/clue';
import MapMenu from './menu/map';

function App() {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.info(`Running Decryptid version ${pkg.version}`);
  }, []);
  return (
    <div className="flex flex-col justify-center p-4 w-full h-full bg-secondary touch-none">
      <div className="gap-4 items-center w-full h-full auto-rotate-invert">
        <GameContextProvider>
          <MapMenu />
          <Game />
          <Decrypter />
          <ClueMenu />
        </GameContextProvider>
      </div>
    </div>
  );
}

export default App;
