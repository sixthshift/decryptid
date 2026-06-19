import { useGameContext } from '../../context';
import Icon from '../../icons/invert';
import MenuItem from '../menu-item';

function Invert() {
  const [, dispatch] = useGameContext();

  const onClick = () => {
    dispatch({ type: 'invert' });
  };
  return (
    <MenuItem onClick={onClick}>
      <Icon />
    </MenuItem>
  );
}

export default Invert;
