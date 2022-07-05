import React from 'react';
import { useGameContext } from '../../context';
import Icon from '../../icons/tile';
import MenuItem from '../menu-item';

function Tile() {
  const id = 'tile';
  const [{ ui: { mode } }, dispatch] = useGameContext();

  const selected = mode === id;
  const onClick = () => {
    dispatch({ type: id });
  };
  return (
    <MenuItem onClick={onClick} selected={selected}>
      <Icon />
    </MenuItem>
  );
}

export default Tile;
