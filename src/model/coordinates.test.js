import Coordinates from './coordinates';

describe('Coordinates', () => {
  let coordinates;
  beforeEach(() => {
    coordinates = new Coordinates({ x: 0, y: 0, z: 0 });
  });
  it('should add coordinates correctly', () => {
    expect(coordinates.add({ x: 0, y: 0, z: 0 })).toEqual({
      x: 0,
      y: 0,
      z: 0,
    });
    expect(coordinates.add({ x: 1, y: 2, z: -3 })).toEqual({
      x: 1,
      y: 2,
      z: -3,
    });
    expect(coordinates.add({ x: 1, y: 2, z: -3 })).toEqual({
      x: 2,
      y: 4,
      z: -6,
    });
    expect(coordinates.add({ x: -2, y: -4, z: 6 })).toEqual({
      x: 0,
      y: 0,
      z: 0,
    });
  });
});
