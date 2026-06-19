import classNames from 'classnames';
import { isEmpty } from 'lodash';
import { useGameContext } from '../../context';
import { childrenPropType, modelPropType } from '../prop-types';
import Territory from './territory';
import Tokens from './tokens';
import { hexToPixel, toPoints } from './utils';

function Hex({ model, children, ...props }) {
  const [
    {
      ui: { radius, spacing },
    },
  ] = useGameContext();
  const pixel = hexToPixel(radius, spacing, model.coordinates);

  const hex = (
    <g transform={`translate(${pixel.x}, ${pixel.y})`} {...props}>
      <polygon
        className={classNames([`fill-${model.terrain}`, 'stroke-secondary', 'stroke-2'])}
        points={toPoints(6, radius)
          .map(({ x, y }) => `${x}, ${y}`)
          .join(' ')}
      />
      {model.territory && <Territory model={model} />}
      {!(isEmpty(model.clues) && isEmpty(model.structures)) && <Tokens model={model} />}
      {children}
    </g>
  );
  return hex;
}

Hex.propTypes = {
  model: modelPropType.isRequired,
  children: childrenPropType,
};

Hex.defaultProps = {
  children: null,
};

export default Hex;
