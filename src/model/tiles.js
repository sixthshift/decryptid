import invariant from 'invariant';
import {
  every, inRange, isInteger, isSafeInteger, range,
} from 'lodash';
import Coordinates from './coordinates';
import Tile from './tile';

class Tiles extends Array {
  constructor(arg) {
    if (isInteger(arg)) {
      super(arg);
    } else {
      const { dimension, anchors, hexes } = arg;
      super(...hexes.map((tile) => new Tile(tile)));
      this.dimension = dimension;
      this.anchors = anchors.map((anchor) => new Coordinates(anchor));
      this.order(range(hexes.length)); // Provide starting order

      // Enforce invariants
      invariant(
        every(
          this,
          (tile) => this.dimension.height * this.dimension.width === tile.length,
        ),
        'There is hex data for each hex in the tile',
      );
    }
  }

  toHexes() {
    return this.flat();
  }

  order(tileIds) {
    tileIds.forEach((tileId) => {
      if (
        !isSafeInteger(tileId)
        || !inRange(tileId, this.length * -1, this.length)
      ) {
        throw new Error(`Invalid tile id ${tileId}`);
      }
      // Negative tileId implies a flip must occur
      if (tileId < 0) {
        // eslint-disable-next-line no-param-reassign
        tileId = (tileId + 1) * -1;
        this[tileId].flip();
      }
      this[tileId].anchor(this.anchors[tileId]);

      return tileId;
    });

    this.sort((a, b) => tileIds.indexOf(a.id()) - tileIds.indexOf(b.id()));
    return this;
  }
}

export default Tiles;
