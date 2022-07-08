/* eslint-disable no-multi-assign */
/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Hex from '../hex';
import { classNamesPropType, modelPropType } from '../prop-types';

function Tile({
  id, tile, className, ...props
}) {
  return (
    <g className={classNames(className, 'tile')} id={id} {...props}>
      {tile.map((hex) => (
        <Hex
          key={`${hex.coordinates.q}, ${hex.coordinates.r}, ${hex.coordinates.s}`}
          model={hex}
        />
      ))}
    </g>
  );
}

Tile.propTypes = {
  id: PropTypes.number.isRequired,
  tile: PropTypes.arrayOf(modelPropType).isRequired,
  className: classNamesPropType,

};
Tile.defaultProps = {
  className: '',
};

export default Tile;
