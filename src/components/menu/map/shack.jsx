import { uniqueId } from 'lodash';
import React, { useContext, useState } from 'react';
import config from '../../../config';
import uiContext from '../../context';
import Icon from '../../icons/shack';
import ColourMenu from '../colour-menu';
import MenuItem from '../menu-item';

function Shack() {
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
      colours={config.structures.filter((structure) => structure.type === 'shack').map((structure) => structure.colour)}
      selected={selected}
    />
  );
}

export default Shack;
