import { uniqueId } from 'lodash';
import React, { useState } from 'react';
import { useUiContext } from '../../context';
import Icon from '../../icons/tile';
import MenuItem from '../menu-item';

function Tile() {
  const [id] = useState(() => uniqueId());
  const [state, dispatch] = useUiContext();

  const selected = state.selected === id;
  const onClick = () => {
    dispatch({ type: 'select', payload: id });
    dispatch({ type: 'tile', payload: null });
  };
  return (
    <MenuItem onClick={onClick} selected={selected}>
      <Icon />
    </MenuItem>
  );
}

export default Tile;
