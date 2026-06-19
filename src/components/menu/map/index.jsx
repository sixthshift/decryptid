import Menu from '../menu';
import Shack from './shack';
import Stone from './stone';
import Tile from './tile';

function MapMenu() {
  return (
    <Menu>
      <Stone />
      <Tile />
      <Shack />
    </Menu>
  );
}

export default MapMenu;
