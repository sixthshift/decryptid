import React from 'react';

import Menu from '../menu';
import Shack from './shack';
import Stone from './stone';
import Tile from './tile';

function Map() {
  return (
    <Menu>
      <Stone />
      <Tile />
      <Shack />
    </Menu>
  );
}

export default Map;
