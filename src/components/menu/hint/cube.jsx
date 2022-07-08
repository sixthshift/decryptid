import React from 'react';
import { useGameContext } from '../../context';
import Icon from '../../icons/cube';
import ColourMenu from '../colour-menu';
import MenuItem from '../menu-item';

function Cube() {
  const id = 'cube';
  const [{ game: { players }, ui: { selected } }, dispatch] = useGameContext();

  const onClick = () => {
    if (selected.mode === id) {
      dispatch({ type: 'deselect' });
    } else {
      dispatch({ type: 'select', payload: { id } });
    }
  };
  return (
    <ColourMenu
      menuItem={(
        <MenuItem onClick={onClick} selected={id === selected.mode}>
          <Icon />
        </MenuItem>
        )}
      id={id}
      colours={players.map((player) => [player.colour, player.cube])}
    />
  );
}

export default Cube;
