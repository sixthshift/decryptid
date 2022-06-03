import { isInteger } from 'lodash';
import observable from './observable';
import Hex from './hex';

class Tile extends Array {
  constructor(arg) {
    if (isInteger(arg)) {
      super(arg);
    } else {
      super(...arg.map((hex) => observable(new Hex(hex))));
    }
  }

  id() {
    return this[0].tile;
  }

  flip() {
    const flippedCoordinates = this.map((hex) => hex.coordinates).reverse();
    const flippedRelativeCoordinates = this.map(
      (hex) => hex.relativeCoordinates,
    ).reverse();
    this.forEach((hex, index) => {
      // eslint-disable-next-line no-param-reassign
      hex.coordinates = flippedCoordinates[index];
      // eslint-disable-next-line no-param-reassign
      hex.relativeCoordinates = flippedRelativeCoordinates[index];
    });
    return this;
  }

  anchor(anchor) {
    this.forEach((hex) => {
      hex.anchor(anchor);
    });
    return this;
  }
}

export default Tile;
