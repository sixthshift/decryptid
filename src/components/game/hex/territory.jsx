import classNames from 'classnames';
import React from 'react';
import { useGameContext } from '../../context';
import { modelPropType } from '../prop-types';
import { toPoints } from './utils';

function Territory({ model }) {
  const [{ ui: { radius } }] = useGameContext();
  return (
    <polygon
      className={classNames(['fill-transparent', `stroke-${model.territory}`, 'stroke-2'])}
      points={toPoints(6, radius * 0.85).map(({ x, y }) => (`${x}, ${y}`)).join(' ')}
    />
  );
}

Territory.propTypes = {
  model: modelPropType.isRequired,
};

export default Territory;
