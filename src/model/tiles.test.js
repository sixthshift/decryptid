import Tile from './tile';
import Tiles from './tiles';

describe('Tiles', () => {
  let tiles;

  beforeEach(() => {
    tiles = new Tiles({
      dimension: { height: 2, width: 2 },
      anchors: [
        { x: 0, y: 0, z: -0 },
        { x: 2, y: -1, z: -1 },
        { x: 0, y: 2, z: -2 },
        { x: 2, y: 1, z: -3 },
      ],
      hexes: [
        [
          { tile: 0, coordinates: { x: 0, y: 0, z: 0 }, terrain: 'water' },
          { tile: 0, coordinates: { x: 0, y: 1, z: -1 }, terrain: 'water' },
          { tile: 0, coordinates: { x: 1, y: 0, z: -1 }, terrain: 'water' },
          { tile: 0, coordinates: { x: 1, y: 1, z: -2 }, terrain: 'water' },
        ],
        [
          { tile: 1, coordinates: { x: 0, y: 0, z: 0 }, terrain: 'swamp' },
          { tile: 1, coordinates: { x: 0, y: 1, z: -1 }, terrain: 'swamp' },
          { tile: 1, coordinates: { x: 1, y: 0, z: -1 }, terrain: 'swamp' },
          { tile: 1, coordinates: { x: 1, y: 1, z: -2 }, terrain: 'swamp' },
        ],
        [
          { tile: 2, coordinates: { x: 0, y: 0, z: 0 }, terrain: 'forest' },
          { tile: 2, coordinates: { x: 0, y: 1, z: -1 }, terrain: 'forest' },
          { tile: 2, coordinates: { x: 1, y: 0, z: -1 }, terrain: 'forest' },
          { tile: 2, coordinates: { x: 1, y: 1, z: -2 }, terrain: 'forest' },
        ],
        [
          { tile: 3, coordinates: { x: 0, y: 0, z: 0 }, terrain: 'mountain' },
          { tile: 3, coordinates: { x: 0, y: 1, z: -1 }, terrain: 'mountain' },
          { tile: 3, coordinates: { x: 1, y: 0, z: -1 }, terrain: 'mountain' },
          { tile: 3, coordinates: { x: 1, y: 1, z: -2 }, terrain: 'mountain' },
        ],
      ],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should order tiles correctly', () => {
    const [t0, t1, t2, t3] = tiles;
    tiles.order([1, 0, 3, 2]);
    expect(tiles[1]).toBe(t0);
    expect(tiles[0]).toBe(t1);
    expect(tiles[3]).toBe(t2);
    expect(tiles[2]).toBe(t3);
  });

  it('should flip tiles correctly when ordering', () => {
    const flip = jest.spyOn(Tile.prototype, 'flip');
    const [t0, t1, t2, t3] = tiles;
    expect(flip).toHaveBeenCalledTimes(0);
    tiles.order([1, -1, -4, 2]);
    expect(flip).toHaveBeenCalledTimes(2);
    expect(tiles[1]).toBe(t0);
    expect(tiles[0]).toBe(t1);
    expect(tiles[3]).toBe(t2);
    expect(tiles[2]).toBe(t3);
  });

  it('should not accept invalid tile ids', () => {
    expect(() => {
      tiles.order([0, 1, 2, 3]);
    }).not.toThrow();
    expect(() => {
      tiles.order([1, 2, 3, 4]);
    }).toThrow('Invalid tile id 4');
    expect(() => {
      tiles.order([-4, -3, -2, -1]);
    }).not.toThrow();
    expect(() => {
      tiles.order([-5, -4, -3, -2]);
    }).toThrow('Invalid tile id -5');
    expect(() => {
      tiles.order([0, 1, 2, '3']);
    }).toThrow('Invalid tile id 3');
    expect(() => {
      tiles.order([0, 1, 2, 'a']);
    }).toThrow('Invalid tile id a');
  });

  it('should correctly reorder on subsequent calls to order', () => {
    const [t0, t1, t2, t3] = tiles;
    expect(tiles[0]).toBe(t0);
    expect(tiles[1]).toBe(t1);
    expect(tiles[2]).toBe(t2);
    expect(tiles[3]).toBe(t3);
    tiles.order([3, 2, 1, 0]);
    expect(tiles[0]).toBe(t3);
    expect(tiles[1]).toBe(t2);
    expect(tiles[2]).toBe(t1);
    expect(tiles[3]).toBe(t0);
    tiles.order([0, 1, 2, 3]);
    expect(tiles[0]).toBe(t0);
    expect(tiles[1]).toBe(t1);
    expect(tiles[2]).toBe(t2);
    expect(tiles[3]).toBe(t3);
    tiles.order([-1, -2, -3, -4]);
    expect(tiles[0]).toBe(t0);
    expect(tiles[1]).toBe(t1);
    expect(tiles[2]).toBe(t2);
    expect(tiles[3]).toBe(t3);
    tiles.order([-4, -3, -2, -1]);
    expect(tiles[0]).toBe(t3);
    expect(tiles[1]).toBe(t2);
    expect(tiles[2]).toBe(t1);
    expect(tiles[3]).toBe(t0);
    tiles.order([0, 1, 2, 3]);
    expect(tiles[0]).toBe(t0);
    expect(tiles[1]).toBe(t1);
    expect(tiles[2]).toBe(t2);
    expect(tiles[3]).toBe(t3);
  });

  it('should correctly map tiles to all hexes', () => {
    const hexes = tiles.toHexes();
    expect(hexes[0].tile).toEqual(0);
    expect(hexes[0].coordinates).toEqual({ x: 0, y: 0, z: 0 });
    expect(hexes[0].terrain).toEqual('water');
    expect(hexes[1].tile).toEqual(0);
    expect(hexes[1].coordinates).toEqual({ x: 0, y: 1, z: -1 });
    expect(hexes[1].terrain).toEqual('water');
    expect(hexes[2].tile).toEqual(0);
    expect(hexes[2].coordinates).toEqual({ x: 1, y: 0, z: -1 });
    expect(hexes[2].terrain).toEqual('water');
    expect(hexes[3].tile).toEqual(0);
    expect(hexes[3].coordinates).toEqual({ x: 1, y: 1, z: -2 });
    expect(hexes[3].terrain).toEqual('water');
    expect(hexes[4].tile).toEqual(1);
    expect(hexes[4].coordinates).toEqual({ x: 2, y: -1, z: -1 });
    expect(hexes[4].terrain).toEqual('swamp');
    expect(hexes[5].tile).toEqual(1);
    expect(hexes[5].coordinates).toEqual({ x: 2, y: 0, z: -2 });
    expect(hexes[5].terrain).toEqual('swamp');
    expect(hexes[6].tile).toEqual(1);
    expect(hexes[6].coordinates).toEqual({ x: 3, y: -1, z: -2 });
    expect(hexes[6].terrain).toEqual('swamp');
    expect(hexes[7].tile).toEqual(1);
    expect(hexes[7].coordinates).toEqual({ x: 3, y: 0, z: -3 });
    expect(hexes[7].terrain).toEqual('swamp');
    expect(hexes[8].tile).toEqual(2);
    expect(hexes[8].coordinates).toEqual({ x: 0, y: 2, z: -2 });
    expect(hexes[8].terrain).toEqual('forest');
    expect(hexes[9].tile).toEqual(2);
    expect(hexes[9].coordinates).toEqual({ x: 0, y: 3, z: -3 });
    expect(hexes[9].terrain).toEqual('forest');
    expect(hexes[10].tile).toEqual(2);
    expect(hexes[10].coordinates).toEqual({ x: 1, y: 2, z: -3 });
    expect(hexes[10].terrain).toEqual('forest');
    expect(hexes[11].tile).toEqual(2);
    expect(hexes[11].coordinates).toEqual({ x: 1, y: 3, z: -4 });
    expect(hexes[11].terrain).toEqual('forest');
    expect(hexes[12].tile).toEqual(3);
    expect(hexes[12].coordinates).toEqual({ x: 2, y: 1, z: -3 });
    expect(hexes[12].terrain).toEqual('mountain');
    expect(hexes[13].tile).toEqual(3);
    expect(hexes[13].coordinates).toEqual({ x: 2, y: 2, z: -4 });
    expect(hexes[13].terrain).toEqual('mountain');
    expect(hexes[14].tile).toEqual(3);
    expect(hexes[14].coordinates).toEqual({ x: 3, y: 1, z: -4 });
    expect(hexes[14].terrain).toEqual('mountain');
    expect(hexes[15].tile).toEqual(3);
    expect(hexes[15].coordinates).toEqual({ x: 3, y: 2, z: -5 });
    expect(hexes[15].terrain).toEqual('mountain');
  });
});
