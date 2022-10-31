import React from 'react';
import Menu from '../menu';
import Cube from './cube';
import Disc from './disc';
import Solve from './solve';

function Clue() {
  return (
    <Menu>
      <Cube />
      <Solve />
      <Disc />
    </Menu>
  );
}

export default Clue;
