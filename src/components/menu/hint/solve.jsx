import { isEmpty } from 'lodash';
import React from 'react';
import { solve } from '../../../solver';
import { useGameContext } from '../../context';
import Icon from '../../icons/solve';
import MenuItem from '../menu-item';

function Solve() {
  const id = 'solve';
  const [{ game, ui: { selected } }, dispatch] = useGameContext();

  const onClick = () => {
    const solved = solve(game);
    if (!isEmpty(solved)) {
      dispatch({ type: 'solve', payload: solved });
    }
  };
  return (
    <MenuItem onClick={onClick} selected={id === selected.mode}>
      <Icon />
    </MenuItem>
  );
}

export default Solve;
