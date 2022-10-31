import reducer from '.';
import config from '../../../config';

describe('game', () => {
  let state;
  beforeEach(() => {
    state = reducer(undefined, { type: undefined });
  });
  it('should initialise with the config state', () => {
    expect(state).toEqual(config);
  });
});
