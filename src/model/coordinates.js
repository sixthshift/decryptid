import invariant from 'invariant';
import { checkPropTypes, number } from 'prop-types';

const coordinatesPropType = {
  x: number,
  y: number,
  z: number,
};

class Coordinates {
  constructor(coordinates) {
    checkPropTypes(coordinatesPropType, coordinates);
    this.x = coordinates.x;
    this.y = coordinates.y;
    this.z = coordinates.z;
    invariant(
      this.x + this.y + this.z === 0,
      `${this.x} + ${this.y} + ${this.z} === 0`,
    );
  }

  set(coordinates) {
    checkPropTypes(coordinatesPropType, coordinates);
    this.x = coordinates.x;
    this.y = coordinates.y;
    this.z = coordinates.z;
    this.validate();
  }

  add(coordinates) {
    checkPropTypes(coordinatesPropType, coordinates);
    this.x += coordinates.x;
    this.y += coordinates.y;
    this.z += coordinates.z;
    this.validate();
    return this;
  }

  validate() {
    invariant(
      this.x + this.y + this.z === 0,
      `${this.x} + ${this.y} + ${this.z} === 0`,
    );
  }
}

export default Coordinates;
