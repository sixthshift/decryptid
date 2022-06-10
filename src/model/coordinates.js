import invariant from 'invariant';
import { checkPropTypes, number } from 'prop-types';

const coordinatesPropType = {
  q: number,
  r: number,
  s: number,
};

class Coordinates {
  constructor(coordinates) {
    checkPropTypes(coordinatesPropType, coordinates);
    this.q = coordinates.q;
    this.r = coordinates.r;
    this.s = coordinates.s;
    invariant(
      this.q + this.r + this.s === 0,
      `${this.q} + ${this.r} + ${this.s} === 0`,
    );
  }

  set(coordinates) {
    checkPropTypes(coordinatesPropType, coordinates);
    this.q = coordinates.q;
    this.r = coordinates.r;
    this.s = coordinates.s;
    this.validate();
  }

  add(coordinates) {
    checkPropTypes(coordinatesPropType, coordinates);
    this.q += coordinates.q;
    this.r += coordinates.r;
    this.s += coordinates.s;
    this.validate();
    return this;
  }

  validate() {
    invariant(
      this.q + this.r + this.s === 0,
      `${this.q} + ${this.r} + ${this.s} === 0`,
    );
  }
}

export default Coordinates;
