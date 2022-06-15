import React from 'react';
import '../stylesheet.css';

import Game from './game';
import HintMenu from './menu/hint';
import MapMenu from './menu/map';

function App() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gradient-1 via-gradient-2 to-gradient-3">
      <div className="gap-8 items-center p-8 w-full h-full auto-rotate-invert">
        <MapMenu />
        <Game />
        <HintMenu />
      </div>
    </div>
  );
}

export default App;
