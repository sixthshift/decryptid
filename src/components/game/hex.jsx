import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Model from '../../model/hex';
import { Context } from './board';

const points = [
  { q: 1, r: 0 },
  { q: 0.5, r: Math.sqrt(3) / 2 },
  { q: -0.5, r: Math.sqrt(3) / 2 },
  { q: -1, r: 0 },
  { q: -0.5, r: -Math.sqrt(3) / 2 },
  { q: 0.5, r: -Math.sqrt(3) / 2 },
];
function Hex({ model }) {
  const { hexToPixel } = useContext(Context);

  const pixel = hexToPixel(model.coordinates);

  return (
    <g transform={`translate(${pixel.x}, ${pixel.y})`}>
      <polygon
        className={`fill-${model.terrain}`}
        points={points.map(({ q, r }) => (`${q}, ${r}`)).join(' ')}
      />
    </g>
  );
}

Hex.propTypes = {
  model: PropTypes.instanceOf(Model).isRequired,
};

export default Hex;
