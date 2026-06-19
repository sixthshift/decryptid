import { useEffect } from 'react';
import pkg from '../../package.json';
import '../stylesheet.css';
import { GameContextProvider } from './context';
import Decrypter from './decrypter';
import Game from './game';
import ClueMenu from './menu/clue';
import MapMenu from './menu/map';

function App() {
  useEffect(() => {
    console.info(`Running Decryptid version ${pkg.version}`);
  }, []);
  return (
    <div className="flex h-full w-full touch-none flex-col justify-center bg-secondary p-4">
      <div className="auto-rotate-invert h-full w-full items-center gap-4">
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
