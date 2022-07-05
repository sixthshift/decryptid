/* eslint-disable no-multi-assign */
import classNames from 'classnames';
import React from 'react';
import { useUiContext } from '../../context';
import { childrenPropType, modelPropType } from '../prop-types';
import { hexToPixel, hexToPoints } from './utils';
import WithMapEdit from './withMapEdit';

function Hex({ model, children }) {
  const [{ radius, spacing }] = useUiContext();
  const pixel = hexToPixel(radius, spacing, model.coordinates);

  const hex = (
    <g transform={`translate(${pixel.x}, ${pixel.y})`}>
      <polygon
        className={classNames([`fill-${model.terrain}`, 'stroke-secondary', 'stroke-2'])}
        points={hexToPoints(radius).map(({ q, r }) => (`${q}, ${r}`)).join(' ')}
      />
      {
        model.territory
          ? (
            <polygon
              className={classNames(['fill-transparent', `stroke-${model.territory}`, 'stroke-2'])}
              points={hexToPoints(radius * 0.85).map(({ q, r }) => (`${q}, ${r}`)).join(' ')}
            />
          )
          : null
      }
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
  children: childrenPropType,
};

Index.defaultProps = Hex.defaultProps = {
  children: null,
};
