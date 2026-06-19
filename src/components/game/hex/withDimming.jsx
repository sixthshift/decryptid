import { useGameContext } from '../../context';
import { childrenPropType, modelPropType } from '../prop-types';
import { toPoints } from './utils';

// A translucent veil in the background colour, washing the terrain toward the
// page so eliminated hexes recede. pointer-events-none keeps the hex clickable
// for placement underneath.
function Veil() {
  const [
    {
      ui: { radius },
    },
  ] = useGameContext();
  return (
    <polygon
      className="pointer-events-none fill-secondary opacity-60"
      points={toPoints(6, radius)
        .map(({ x, y }) => `${x}, ${y}`)
        .join(' ')}
    />
  );
}

const WithDimming = (Component) => {
  function Dimming({ model, children }) {
    return (
      <Component model={model}>
        {children}
        <Veil />
      </Component>
    );
  }

  Dimming.propTypes = {
    model: modelPropType.isRequired,
    children: childrenPropType,
  };
  Dimming.defaultProps = {
    children: null,
  };
  return Dimming;
};

export default WithDimming;
