import { groupBy } from 'lodash';
import React, { useEffect } from 'react';
import { useGameContext } from '../context';
import { decrypt } from '../decrypter/solver';
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

function Game() {
  const [{ game, game: { board, ruleset }, ui: { radius, spacing, inversion } }, dispatch] = useGameContext();
  const dimensions = toDimensions(board, radius, spacing);
  const tiles = groupBy(board, (hex) => (hex.tile));
  useEffect(() => {
    dispatch({
      type: 'decrypt',
      payload: decrypt(game, inversion),
    });
  }, [JSON.stringify(ruleset), inversion]);

  return (
    <div className="portrait:grow portrait:w-fit portrait:h-fit landscape:h-full">
      <svg
        width="100%"
        height="100%"
        viewBox={`-${(dimensions.hex.width) / 2} -${(dimensions.hex.height) / 2} ${dimensions.board.width} ${dimensions.board.height}`}
      >
        {Object.entries(tiles).map(([id, tile]) => (
          <Tile key={id} id={Number(id)} tile={tile} />
        ))}
      </svg>
    </div>
  );
}

export default Game;
