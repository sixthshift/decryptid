import React from 'react';

import Menu from '../menu';
import Shack from './shack';
import Stone from './stone';
import Tile from './tile';

function Map() {
  return (
    <Menu>
      <Tile />
      <Stone />
      <Shack />
    </Menu>
  );
}

export default Map;
