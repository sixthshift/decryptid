import PropTypes from 'prop-types';
import { useGameContext } from '../../context';
import { classNamesPropType, modelPropType } from '../prop-types';
import Tile from './tile';
import WithMapEdit from './withMapEdit';

// Build the wrapped component once. Calling WithMapEdit(Tile) inside render
// produces a new component type every render, which remounts every tile and
// breaks in-progress drag gestures.
const MapEditableTile = WithMapEdit(Tile);

function Index({ tile, className, ...props }) {
  const [
    {
      ui: { selected },
    },
  ] = useGameContext();
  const Component = selected.mode === 'tile' ? MapEditableTile : Tile;
  return <Component tile={tile} className={className} {...props} />;
}

export default Index;

Index.propTypes = {
  id: PropTypes.number.isRequired,
  tile: PropTypes.arrayOf(modelPropType).isRequired,
  className: classNamesPropType,
};

Index.defaultProps = {
  className: '',
};
