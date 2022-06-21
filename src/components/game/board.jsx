import { groupBy } from 'lodash';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import Model from '../../model/board';
import Context from './context';
import Tile from './tile';

const toDimensions = (model, radius, spacing) => {
  const { x, y } = model.reduce((acc, hex) => ({
    x: Math.max(acc.x, hex.coordinates.q + 1),
    y: Math.max(acc.y, hex.coordinates.r + 1),
  }), { x: 0, y: 0 });
  const hex = {
    width: (radius * 2),
    height: radius * Math.sqrt(3),
  };
  const board = {
    width:
      // non-overlapping part of the hexes
      // + trailing end of the last hex
      // + spacing between the hexes
      (0.75 * hex.width * x)
    + (0.25 * hex.width)
    + (spacing * 0.75 * hex.width * (x - 1)),
    height:
      // height of the hexes
      // + trailing end of the last hex
      // + spacing between the hexes + 1 due to each column having alternating offsets
      (hex.height * y)
    + (0.5 * hex.height)
    + (spacing * hex.height * y),
  };
  return { hex, board };
};

function Board({ model, radius, spacing }) {
  const dimensions = toDimensions(model, radius, spacing);
  const context = useMemo(() => ({ hexes: model, radius, spacing }));
  const tiles = groupBy(model, (hex) => (hex.tile));

  return (
    <Context.Provider value={context}>
      <svg
        width="100%"
        height="100%"
        viewBox={`-${(dimensions.hex.width) / 2} -${(dimensions.hex.height) / 2} ${dimensions.board.width} ${dimensions.board.height}`}
      >
        {Object.entries(tiles).map(([id, tile]) => (
          <Tile key={id} tile={tile} />
        ))}
      </svg>
    </Context.Provider>
  );
}

Board.propTypes = {
  radius: PropTypes.number,
  spacing: PropTypes.number,
  model: PropTypes.instanceOf(Model).isRequired,
};

Board.defaultProps = {
  radius: 30,
  spacing: 0,
};

export default Board;
