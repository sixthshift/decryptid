import reducer from '.';

describe('place', () => {
  let state;
  beforeEach(() => {
    state = reducer(undefined, { type: undefined });
  });
  it('should place an alpha cube at (0,0)', () => {
    const action = {
      type: 'place',
      payload: { mode: 'cube', colour: 'alpha', coordinates: { q: 0, r: 0, s: 0 } },
    };
    const received = reducer(state, action);

    expect(
      received.board.find(
        (hex) => hex.coordinates.q === 0 && hex.coordinates.r === 0 && hex.coordinates.s === 0,
      ),
    ).toEqual({
      anchor: true,
      tile: 0,
      coordinates: { q: 0, r: 0, s: 0 },
      terrain: 'water',
      structures: [],
      clues: [{ type: 'cube', colour: 'alpha' }],
      isCandidate: false,
    });
  });
});
