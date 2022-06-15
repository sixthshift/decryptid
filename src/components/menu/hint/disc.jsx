import React from 'react';
import config from '../../../model/config';
import Icon from '../../icons/disc';
import ColourMenu from '../colour-menu';
import MenuItem from '../menu-item';

function Disc() {
  return (
    <ColourMenu
      menuItem={(
        <MenuItem>
          <Icon className="stroke-primary" />
        </MenuItem>
        )}
      colours={config.players.map((player) => player.symbol)}
    />
  );
}

export default Disc;
