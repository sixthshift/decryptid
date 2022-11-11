import React from 'react';
import { useGameContext } from '../../context';
import Icon from '../../icons/solve';
import MenuItem from '../menu-item';

function Solve() {
  const id = 'solve';
  const [{ ui: { selected } }] = useGameContext();

  const onClick = () => {};
  return (
    <MenuItem onClick={onClick} selected={id === selected.mode}>
      <Icon />
    </MenuItem>
  );
}

export default Solve;
