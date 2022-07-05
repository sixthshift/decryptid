import React from 'react';
import config from '../../../config';
import { useGameContext } from '../../context';
import Icon from '../../icons/cube';
import ColourMenu from '../colour-menu';
import MenuItem from '../menu-item';

function Cube() {
  const id = 'cube';
  const [{ ui: { mode } }, dispatch] = useGameContext();

  const selected = mode === id;
  const onClick = () => {
    dispatch({ type: id });
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
