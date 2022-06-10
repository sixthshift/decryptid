import Coordinates from './coordinates';

describe('Coordinates', () => {
  let coordinates;
  beforeEach(() => {
    coordinates = new Coordinates({ q: 0, r: 0, s: 0 });
  });
  it('should add coordinates correctly', () => {
    expect(coordinates.add({ q: 0, r: 0, s: 0 })).toEqual({
      q: 0,
      r: 0,
      s: 0,
    });
    expect(coordinates.add({ q: 1, r: 2, s: -3 })).toEqual({
      q: 1,
      r: 2,
      s: -3,
    });
    expect(coordinates.add({ q: 1, r: 2, s: -3 })).toEqual({
      q: 2,
      r: 4,
      s: -6,
    });
    expect(coordinates.add({ q: -2, r: -4, s: 6 })).toEqual({
      q: 0,
      r: 0,
      s: 0,
    });
  });
});
