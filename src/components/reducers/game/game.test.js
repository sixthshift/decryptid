import { omit } from 'lodash';
import config from '../../../config';
import reducer from '.';

describe('game', () => {
  let state;
  beforeEach(() => {
    state = reducer(undefined, { type: undefined });
  });
  it('should initialise correctly using the config state', () => {
    expect(omit(state, 'ruleset')).toEqual(omit(config, 'ruleset'));
    expect(state.ruleset).toEqual(config.ruleset.map((rule) => expect.objectContaining(rule)));
  });
});
