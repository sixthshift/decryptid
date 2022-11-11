import React from 'react';
import Menu from '../menu';
import Cube from './cube';
import Disc from './disc';
import Invert from './invert';

function Clue() {
  return (
    <Menu>
      <Cube />
      <Invert />
      <Disc />
    </Menu>
  );
}

export default Clue;
