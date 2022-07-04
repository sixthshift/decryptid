/* eslint-disable no-multi-assign */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useUiContext } from '../../context';
import { hexToPixel, hexToPoints } from './utils';
import WithMapEdit from './withMapEdit';

const modelPropType = PropTypes.shape({
  anchor: PropTypes.bool,
  tile: PropTypes.number,
  coordinates: PropTypes.shape({
    q: PropTypes.number,
    r: PropTypes.number,
    s: PropTypes.number,
  }),
  terrain: PropTypes.string,
  territory: PropTypes.string,
  hints: PropTypes.arrayOf(PropTypes.string),
});

function Hex({ model, children }) {
  const [{ radius, spacing }] = useUiContext();
  const pixel = hexToPixel(radius, spacing, model.coordinates);
  const hex = (
    <g transform={`translate(${pixel.x}, ${pixel.y})`}>
      <polygon
        className={classNames([`fill-${model.terrain}`, 'stroke-secondary', 'stroke-2'])}
        points={hexToPoints(radius).map(({ q, r }) => (`${q}, ${r}`)).join(' ')}
      />
      {children}
    </g>
  );

  return hex;
}

function Index({ model, children }) {
  let Component = Hex;
  const [{ mode }] = useUiContext();
  if (mode === 'tile') {
    Component = WithMapEdit(Component);
  }

  return (
    <Component model={model}>
      {children}
    </Component>
  );
}

export default Index;

Index.propTypes = Hex.propTypes = {
  model: modelPropType.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Index.defaultProps = Hex.defaultProps = {
  children: null,
};
