import Hex from './hex';
import Tile from './tile';

describe('Tile', () => {
  let tile;
  beforeEach(() => {
    tile = new Tile([
      new Hex({
        tile: 0,
        coordinates: { x: 0, y: 0, z: 0 },
        terrain: 'desert',
      }),
      new Hex({
        tile: 0,
        coordinates: { x: 1, y: 1, z: -2 },
        terrain: 'forest',
      }),
      new Hex({
        tile: 0,
        coordinates: { x: 2, y: 2, z: -4 },
        terrain: 'mountain',
      }),
      new Hex({
        tile: 0,
        coordinates: { x: 3, y: 3, z: -6 },
        terrain: 'swamp',
      }),
      new Hex({
        tile: 0,
        coordinates: { x: 4, y: 4, z: -8 },
        terrain: 'water',
      }),
    ]);
  });

  it('should correctly get the tile id', () => {
    expect(tile.id()).toEqual(0);
  });

  it('should correctly rotate 180 degrees', () => {
    tile.flip();
    expect(tile[0].terrain).toEqual('desert');
    expect(tile[0].coordinates).toEqual({ x: 4, y: 4, z: -8 });
    expect(tile[0].relativeCoordinates).toEqual({ x: 4, y: 4, z: -8 });

    expect(tile[1].terrain).toEqual('forest');
    expect(tile[1].coordinates).toEqual({ x: 3, y: 3, z: -6 });
    expect(tile[1].relativeCoordinates).toEqual({ x: 3, y: 3, z: -6 });

    expect(tile[2].terrain).toEqual('mountain');
    expect(tile[2].coordinates).toEqual({ x: 2, y: 2, z: -4 });
    expect(tile[2].relativeCoordinates).toEqual({ x: 2, y: 2, z: -4 });

    expect(tile[3].terrain).toEqual('swamp');
    expect(tile[3].coordinates).toEqual({ x: 1, y: 1, z: -2 });
    expect(tile[3].relativeCoordinates).toEqual({ x: 1, y: 1, z: -2 });

    expect(tile[4].terrain).toEqual('water');
    expect(tile[4].coordinates).toEqual({ x: 0, y: 0, z: 0 });
    expect(tile[4].relativeCoordinates).toEqual({ x: 0, y: 0, z: 0 });
  });

  it('should correctly anchor to a coordinate', () => {
    tile.anchor({ x: 1, y: 1, z: -2 });
    expect(tile[0].terrain).toEqual('desert');
    expect(tile[0].coordinates).toEqual({ x: 1, y: 1, z: -2 });
    expect(tile[0].relativeCoordinates).toEqual({ x: 0, y: 0, z: 0 });

    expect(tile[1].terrain).toEqual('forest');
    expect(tile[1].coordinates).toEqual({ x: 2, y: 2, z: -4 });
    expect(tile[1].relativeCoordinates).toEqual({ x: 1, y: 1, z: -2 });

    expect(tile[2].terrain).toEqual('mountain');
    expect(tile[2].coordinates).toEqual({ x: 3, y: 3, z: -6 });
    expect(tile[2].relativeCoordinates).toEqual({ x: 2, y: 2, z: -4 });

    expect(tile[3].terrain).toEqual('swamp');
    expect(tile[3].coordinates).toEqual({ x: 4, y: 4, z: -8 });
    expect(tile[3].relativeCoordinates).toEqual({ x: 3, y: 3, z: -6 });

    expect(tile[4].terrain).toEqual('water');
    expect(tile[4].coordinates).toEqual({ x: 5, y: 5, z: -10 });
    expect(tile[4].relativeCoordinates).toEqual({ x: 4, y: 4, z: -8 });
  });

  it('should correctly flip and anchor in combination', () => {
    tile.anchor({ x: 1, y: 1, z: -2 });
    tile.flip();
    expect(tile[0].terrain).toEqual('desert');
    expect(tile[0].coordinates).toEqual({ x: 5, y: 5, z: -10 });
    expect(tile[0].relativeCoordinates).toEqual({ x: 4, y: 4, z: -8 });

    expect(tile[1].terrain).toEqual('forest');
    expect(tile[1].coordinates).toEqual({ x: 4, y: 4, z: -8 });
    expect(tile[1].relativeCoordinates).toEqual({ x: 3, y: 3, z: -6 });

    expect(tile[2].terrain).toEqual('mountain');
    expect(tile[2].coordinates).toEqual({ x: 3, y: 3, z: -6 });
    expect(tile[2].relativeCoordinates).toEqual({ x: 2, y: 2, z: -4 });

    expect(tile[3].terrain).toEqual('swamp');
    expect(tile[3].coordinates).toEqual({ x: 2, y: 2, z: -4 });
    expect(tile[3].relativeCoordinates).toEqual({ x: 1, y: 1, z: -2 });

    expect(tile[4].terrain).toEqual('water');
    expect(tile[4].coordinates).toEqual({ x: 1, y: 1, z: -2 });
    expect(tile[4].relativeCoordinates).toEqual({ x: 0, y: 0, z: 0 });
  });
});
