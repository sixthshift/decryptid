import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import Model from '../../model/board';
import Hex from './hex';

const hexToPixel = (spacing) => ({ q, r }) => ({
  x: (1 + spacing) * ((3 / 2) * q),
  y: (1 + spacing) * ((Math.sqrt(3) / 2) * q + Math.sqrt(3) * r),
});

const toDimensions = (radius, spacing, { x, y }) => {
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

function Board({ radius, spacing, model }) {
  const axis = model.reduce((acc, hex) => ({
    x: Math.max(acc.x, hex.coordinates.q + 1),
    y: Math.max(acc.y, hex.coordinates.r + 1),
  }), { x: 0, y: 0 });
  const dimensions = toDimensions(radius, spacing, axis);

  const context = useMemo(() => ({
    hexToPixel: hexToPixel(spacing),
  }));

  return (
    <Context.Provider value={context}>
      <svg
        width="100%"
        height="100%"
        viewBox={`-${(dimensions.hex.width) / 2} -${(dimensions.hex.height) / 2} ${dimensions.board.width} ${dimensions.board.height}`}
      >
        <g>
          {model.map((hex) => <Hex model={hex} key={`${hex.coordinates.q}, ${hex.coordinates.r}, ${hex.coordinates.s}`} />)}
        </g>
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
  radius: 1,
  spacing: 0.05,
};

const Context = createContext();
export { Context };
export default Board;
