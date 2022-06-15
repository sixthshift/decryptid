import React from 'react';
import config from '../../../config';
import Icon from '../../icons/shack';
import ColourMenu from '../colour-menu';
import MenuItem from '../menu-item';

function Shack() {
  return (
    <ColourMenu
      menuItem={(
        <MenuItem>
          <Icon className="stroke-primary" />
        </MenuItem>
        )}
      colours={config.structures.filter((structure) => structure.type === 'shack').map((structure) => structure.colour)}
    />
  );
}

export default Shack;
