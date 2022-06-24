import { uniqueId } from 'lodash';
import React, { useState } from 'react';
import config from '../../../config';
import { useUiContext } from '../../context';
import Icon from '../../icons/shack';
import ColourMenu from '../colour-menu';
import MenuItem from '../menu-item';

function Shack() {
  const [id] = useState(() => uniqueId());
  const [state, dispatch] = useUiContext();

  const selected = state.selected === id;
  const onClick = () => {
    dispatch({ type: 'select', payload: id });
    dispatch({ type: 'shack' });
  };
  return (
    <ColourMenu
      menuItem={(
        <MenuItem onClick={onClick} selected={selected}>
          <Icon />
        </MenuItem>
        )}
      colours={config.structures.filter((structure) => structure.type === 'shack').map((structure) => structure.colour)}
      selected={selected}
    />
  );
}

export default Shack;
