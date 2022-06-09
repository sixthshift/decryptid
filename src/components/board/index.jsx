import React from 'react';
import {
  HexGrid, Layout, Hexagon,
} from 'react-hexgrid';

import Game from '../../model/cryptid';
import config from '../../model/config';

const calculateDimensions = (axis, radius, spacing) => {
  const hex = {
    width: (radius * 2),
    height: radius * Math.sqrt(3),
  };
  const board = {
    width:
    // non-overlapping part of the hexes
    // + trailing end of the last hex
    // + spacing between the hexes
      (0.75 * hex.width * axis.x)
    + (0.25 * hex.width)
    + (spacing * 0.75 * hex.width * (axis.x - 1)),
    height:
    // height of the hexes
    // + trailing end of the last hex
    // + spacing between the hexes
      (hex.height * axis.y)
    + (0.5 * hex.height)
    + (spacing * hex.height * (axis.y - 1)),
  };
  return { hex, board };
};

function Board() {
  const game = new Game(config);

  const radius = 1;
  const spacing = 0.05;
  const axis = game.board.reduce((acc, hex) => ({
    x: Math.max(acc.x, hex.coordinates.x + 1),
    y: Math.max(acc.y, hex.coordinates.y + 1),
  }), { x: 0, y: 0 });

  const dimensions = calculateDimensions(axis, radius, spacing);
  const viewBox = `-${(dimensions.hex.width) / 2} -${(dimensions.hex.height) / 2} ${dimensions.board.width} ${dimensions.board.height}`;

  return (
    <div className=" grow">
      <HexGrid width="100%" height="100%" viewBox={viewBox}>
        <Layout size={{ x: radius, y: radius }} flat spacing={1 + spacing} origin={{ x: 0, y: 0 }}>
          {game.board.map((hex) => (
            <Hexagon
              key={`${hex.coordinates.x}, ${hex.coordinates.y}, ${hex.coordinates.z}`}
              q={hex.coordinates.x}
              r={hex.coordinates.y}
              s={hex.coordinates.z}
            />
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
}
export default Board;
