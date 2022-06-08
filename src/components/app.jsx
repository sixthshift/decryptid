import React from 'react';

import HintMenu from './menu/hint';
import MapMenu from './menu/map';

import '../stylesheet.css';

function App() {
  return (
    <div className="p-8 h-full bg-gradient-to-br from-gradient-1 via-gradient-2 to-gradient-3">
      <div className="h-full auto-rotate">
        <MapMenu />
        <div className="flex grow" />
        <HintMenu />
      </div>
    </div>
  );
}

export default App;
