import Coordinates from './coordinates';

class Hex {
  constructor({
    tile, coordinates, terrain, territory,
  }) {
    this.tile = tile;
    this.coordinates = new Coordinates(coordinates);
    this.terrain = terrain;
    this.territory = territory;
    this.hints = [];
  }
}
export default Hex;
