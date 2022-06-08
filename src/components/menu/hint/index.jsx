import React from 'react';

import Menu from '../menu';
import Cube from './cube';
import Disc from './disc';

function Map() {
  return (
    <Menu>
      <Cube />
      <Disc />
    </Menu>
  );
}

export default Map;
