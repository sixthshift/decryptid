import React from 'react';
import '../stylesheet.css';
import { UiContextProvider } from './context';
import Game from './game';
import HintMenu from './menu/hint';
import MapMenu from './menu/map';

function App() {
  return (
    <div className="flex flex-col justify-center w-full min-w-sm h-full bg-secondary">
      <div className="gap-8 items-center p-4 w-full h-full auto-rotate-invert">
        <UiContextProvider>
          <MapMenu />
          <Game />
          <HintMenu />
        </UiContextProvider>
      </div>
    </div>
  );
}

export default App;
