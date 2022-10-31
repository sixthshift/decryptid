import React from 'react';
import Menu from '../menu';
import Cube from './cube';
import Disc from './disc';
import Solve from './solve';

function Hint() {
  return (
    <Menu>
      <Cube />
      <Solve />
      <Disc />
    </Menu>
  );
}

export default Hint;
