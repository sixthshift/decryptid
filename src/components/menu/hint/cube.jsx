import { uniqueId } from 'lodash';
import React, { useContext, useState } from 'react';
import config from '../../../config';
import uiContext from '../../context';
import Icon from '../../icons/cube';
import ColourMenu from '../colour-menu';
import MenuItem from '../menu-item';

function Cube() {
  const [id] = useState(() => uniqueId());
  const [state, dispatch] = useContext(uiContext);

  const selected = state.selected === id;
  const onClick = () => {
    dispatch({ type: 'select', payload: id });
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
