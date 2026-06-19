import { useGameContext } from '../../context';
import Icon from '../../icons/shack';
import ColourMenu from '../colour-menu';
import MenuItem from '../menu-item';

function Shack() {
  const id = 'shack';
  const [
    {
      game: { structures },
      ui: { selected },
    },
    dispatch,
  ] = useGameContext();

  const onClick = () => {
    if (selected.mode === id) {
      dispatch({ type: 'deselect' });
    } else {
      dispatch({ type: 'select', payload: { id } });
    }
  };
  return (
    <ColourMenu
      menuItem={
        <MenuItem onClick={onClick} selected={id === selected.mode}>
          <Icon />
        </MenuItem>
      }
      id={id}
      colours={structures.map((structure) => [structure.colour, structure.shack])}
    />
  );
}

export default Shack;
