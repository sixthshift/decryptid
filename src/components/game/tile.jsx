import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Model from '../../model/hex';
import gameContext from './context';
import Hex from './hex';

function Tile({ tile }) {
  const { radius, spacing } = useContext(gameContext);
  return (
    <g>
      {tile.map((hex) => (
        <Hex
          key={`${hex.coordinates.q}, ${hex.coordinates.r}, ${hex.coordinates.s}`}
          model={hex}
          radius={radius}
          spacing={spacing}
        />
      ))}
    </g>
  );
}

Tile.propTypes = {
  tile: PropTypes.arrayOf(PropTypes.instanceOf(Model)).isRequired,
};

export default Tile;
