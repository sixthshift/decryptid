import Tiles from './tiles';

class Board {
  constructor({ dimension, tiles }) {
    this.dimension = dimension;
    this.tiles = new Tiles(tiles);
    this.hexes = this.tiles.toHexes();
  }
}

export default Board;
