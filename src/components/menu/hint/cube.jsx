import { uniqueId } from 'lodash';
import React, { useState } from 'react';
import config from '../../../config';
import { useUiContext } from '../../context';
import Icon from '../../icons/cube';
import ColourMenu from '../colour-menu';
import MenuItem from '../menu-item';

function Cube() {
  const [id] = useState(() => uniqueId());
  const [state, dispatch] = useUiContext();

  const selected = state.selected === id;
  const onClick = () => {
    dispatch({ type: 'select', payload: id });
    dispatch({ type: 'cube' });
  };
  return (
    <ColourMenu
      menuItem={(
        <MenuItem onClick={onClick} selected={selected}>
          <Icon />
        </MenuItem>
        )}
      colours={config.players.map((player) => player.symbol)}
      selected={selected}
    />
  );
}

export default Cube;
