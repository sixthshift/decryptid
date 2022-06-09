import { isInteger } from 'lodash';
import Hex from './hex';

class Board extends Array {
  constructor(arg) {
    if (isInteger(arg)) {
      super(arg);
    } else {
      super(...arg.map((hex) => (new Hex(hex))));
    }
  }
}

export default Board;
