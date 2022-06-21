import Coordinates from './coordinates';

class Hex {
  constructor({
    anchor, tile, coordinates, terrain, territory,
  }) {
    this.anchor = anchor;
    this.tile = tile;
    this.coordinates = new Coordinates(coordinates);
    this.terrain = terrain;
    this.territory = territory;
    this.hints = [];
  }
}
export default Hex;
