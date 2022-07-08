import React from 'react';
import { useGameContext } from '../../context';
import Icon from '../../icons/tile';
import MenuItem from '../menu-item';

function Tile() {
  const id = 'tile';
  const [{ ui: { selected } }, dispatch] = useGameContext();

  const onClick = () => {
    if (selected.mode === id) {
      dispatch({ type: 'deselect' });
    } else {
      dispatch({ type: 'select', payload: { id } });
    }
  };
  return (
    <MenuItem onClick={onClick} selected={id === selected.mode}>
      <Icon />
    </MenuItem>
  );
}

export default Tile;
