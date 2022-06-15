import React from 'react';
import config from '../../../model/config';
import Icon from '../../icons/stone';
import ColourMenu from '../colour-menu';
import MenuItem from '../menu-item';

function Stone() {
  return (
    <ColourMenu
      menuItem={(
        <MenuItem>
          <Icon className="stroke-primary" />
        </MenuItem>
        )}
      colours={config.structures.filter((structure) => structure.type === 'stone').map((structure) => structure.colour)}
    />
  );
}

export default Stone;
