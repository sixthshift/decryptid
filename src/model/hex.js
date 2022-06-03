import Coordinates from './coordinates';

class Hex {
  constructor({
    tile, coordinates, terrain, territory,
  }) {
    this.tile = tile;
    this.coordinates = new Coordinates(coordinates);
    this.relativeCoordinates = new Coordinates(coordinates); // Retain a copy of the raw coordinates
    this.terrain = terrain;
    this.territory = territory;
    this.hints = [];
  }

  anchor(anchor) {
    this.coordinates.set(this.relativeCoordinates);
    this.coordinates.add(anchor);
  }
}
export default Hex;
