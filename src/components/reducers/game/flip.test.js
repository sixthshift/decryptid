import { orderBy } from 'lodash';
import reducer from '.';

describe('flip', () => {
  let state;
  beforeEach(() => {
    state = reducer(undefined, { type: undefined });
  });
  it('should flip tile 0 correctly', () => {
    const action = {
      type: 'flip',
      payload: 0,
    };
    const received = reducer(state, action);
    const expected = [
      {
        anchor: true, tile: 1, coordinates: { q: 6, r: -3, s: -3 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 6, r: -2, s: -4 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 6, r: -1, s: -5 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -3, s: -4 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -2, s: -5 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -1, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -4, s: -4 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -3, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -2, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -4, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -3, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -2, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -5, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -4, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -3, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -5, s: -6 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -4, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -3, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        anchor: true, tile: 2, coordinates: { q: 0, r: 3, s: -3 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 0, r: 4, s: -4 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 0, r: 5, s: -5 }, terrain: 'mountain', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 3, s: -4 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 4, s: -5 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 5, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 2, s: -4 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 3, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 4, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 2, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 3, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 4, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 1, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 2, s: -6 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 3, s: -7 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 1, s: -6 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 2, s: -7 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 3, s: -8 }, terrain: 'water', structures: [], clues: [],
      },
      {
        anchor: true, tile: 3, coordinates: { q: 6, r: 0, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 6, r: 1, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 6, r: 2, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 0, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 1, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 2, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: -1, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: 0, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: 1, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: -1, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: 0, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: 1, s: -10 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: -2, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: -1, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: 0, s: -10 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: -2, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: -1, s: -10 }, terrain: 'water', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: 0, s: -11 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        anchor: true, tile: 4, coordinates: { q: 0, r: 6, s: -6 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 0, r: 7, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 0, r: 8, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 6, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 7, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 8, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 5, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 6, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 7, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 5, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 6, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 7, s: -10 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 4, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 5, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 6, s: -10 }, terrain: 'water', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 4, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 5, s: -10 }, terrain: 'mountain', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 6, s: -11 }, terrain: 'water', territory: 'bear', structures: [], clues: [],
      },
      {
        anchor: true, tile: 5, coordinates: { q: 6, r: 3, s: -9 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 6, r: 4, s: -10 }, terrain: 'mountain', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 6, r: 5, s: -11 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 3, s: -10 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 4, s: -11 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 5, s: -12 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 2, s: -10 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 3, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 4, s: -12 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 2, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 3, s: -12 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 4, s: -13 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 1, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 2, s: -12 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 3, s: -13 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 1, s: -12 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 2, s: -13 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 3, s: -14 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 0, r: 0, s: 0 }, terrain: 'forest', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 0, r: 1, s: -1 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 0, r: 2, s: -2 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 0, s: -1 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 1, s: -2 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 2, s: -3 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: -1, s: -1 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: 0, s: -2 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: 1, s: -3 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: -1, s: -2 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: 0, s: -3 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: 1, s: -4 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: -2, s: -2 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: -1, s: -3 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: 0, s: -4 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: -2, s: -3 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: -1, s: -4 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        anchor: true, tile: 0, coordinates: { q: 5, r: 0, s: -5 }, terrain: 'water', structures: [], clues: [],
      }];
    expect(received.board).toEqual(expected);
  });
  it('should double flip tile 0 correctly', () => {
    const action = {
      type: 'flip',
      payload: 0,
    };
    const received = reducer(reducer(state, action), action);
    const expected = state;
    expect(orderBy(received.board, 'tile')).toEqual(orderBy(expected.board, 'tile'));
  });
  it('should flip tile 1 correctly', () => {
    const action = {
      type: 'flip',
      payload: 1,
    };
    const received = reducer(state, action);
    const expected = [
      {
        anchor: true, tile: 0, coordinates: { q: 0, r: 0, s: 0 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 0, r: 1, s: -1 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 0, r: 2, s: -2 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 0, s: -1 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 1, s: -2 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 2, s: -3 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: -1, s: -1 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: 0, s: -2 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: 1, s: -3 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: -1, s: -2 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: 0, s: -3 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: 1, s: -4 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: -2, s: -2 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: -1, s: -3 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: 0, s: -4 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: -2, s: -3 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: -1, s: -4 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: 0, s: -5 }, terrain: 'forest', territory: 'bear', structures: [], clues: [],
      },
      {
        anchor: true, tile: 2, coordinates: { q: 0, r: 3, s: -3 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 0, r: 4, s: -4 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 0, r: 5, s: -5 }, terrain: 'mountain', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 3, s: -4 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 4, s: -5 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 5, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 2, s: -4 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 3, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 4, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 2, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 3, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 4, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 1, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 2, s: -6 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 3, s: -7 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 1, s: -6 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 2, s: -7 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 3, s: -8 }, terrain: 'water', structures: [], clues: [],
      },
      {
        anchor: true, tile: 3, coordinates: { q: 6, r: 0, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 6, r: 1, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 6, r: 2, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 0, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 1, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 2, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: -1, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: 0, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: 1, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: -1, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: 0, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: 1, s: -10 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: -2, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: -1, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: 0, s: -10 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: -2, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: -1, s: -10 }, terrain: 'water', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: 0, s: -11 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        anchor: true, tile: 4, coordinates: { q: 0, r: 6, s: -6 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 0, r: 7, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 0, r: 8, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 6, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 7, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 8, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 5, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 6, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 7, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 5, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 6, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 7, s: -10 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 4, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 5, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 6, s: -10 }, terrain: 'water', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 4, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 5, s: -10 }, terrain: 'mountain', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 6, s: -11 }, terrain: 'water', territory: 'bear', structures: [], clues: [],
      },
      {
        anchor: true, tile: 5, coordinates: { q: 6, r: 3, s: -9 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 6, r: 4, s: -10 }, terrain: 'mountain', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 6, r: 5, s: -11 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 3, s: -10 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 4, s: -11 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 5, s: -12 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 2, s: -10 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 3, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 4, s: -12 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 2, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 3, s: -12 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 4, s: -13 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 1, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 2, s: -12 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 3, s: -13 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 1, s: -12 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 2, s: -13 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 3, s: -14 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 6, r: -3, s: -3 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 6, r: -2, s: -4 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 6, r: -1, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -3, s: -4 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -2, s: -5 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -1, s: -6 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -4, s: -4 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -3, s: -5 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -2, s: -6 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -4, s: -5 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -3, s: -6 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -2, s: -7 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -5, s: -5 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -4, s: -6 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -3, s: -7 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -5, s: -6 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -4, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        anchor: true, tile: 1, coordinates: { q: 11, r: -3, s: -8 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      }];
    expect(received.board).toEqual(expected);
  });
  it('should double flip tile 1 correctly', () => {
    const action = {
      type: 'flip',
      payload: 1,
    };
    const received = reducer(reducer(state, action), action);
    const expected = state;
    expect(orderBy(received.board, 'tile')).toEqual(orderBy(expected.board, 'tile'));
  });
  it('should flip tile 2 correctly', () => {
    const action = {
      type: 'flip',
      payload: 2,
    };
    const received = reducer(state, action);
    const expected = [
      {
        anchor: true, tile: 0, coordinates: { q: 0, r: 0, s: 0 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 0, r: 1, s: -1 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 0, r: 2, s: -2 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 0, s: -1 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 1, s: -2 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 2, s: -3 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: -1, s: -1 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: 0, s: -2 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: 1, s: -3 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: -1, s: -2 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: 0, s: -3 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: 1, s: -4 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: -2, s: -2 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: -1, s: -3 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: 0, s: -4 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: -2, s: -3 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: -1, s: -4 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: 0, s: -5 }, terrain: 'forest', territory: 'bear', structures: [], clues: [],
      },
      {
        anchor: true, tile: 1, coordinates: { q: 6, r: -3, s: -3 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 6, r: -2, s: -4 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 6, r: -1, s: -5 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -3, s: -4 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -2, s: -5 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -1, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -4, s: -4 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -3, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -2, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -4, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -3, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -2, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -5, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -4, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -3, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -5, s: -6 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -4, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -3, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        anchor: true, tile: 3, coordinates: { q: 6, r: 0, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 6, r: 1, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 6, r: 2, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 0, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 1, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 2, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: -1, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: 0, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: 1, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: -1, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: 0, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: 1, s: -10 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: -2, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: -1, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: 0, s: -10 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: -2, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: -1, s: -10 }, terrain: 'water', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: 0, s: -11 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        anchor: true, tile: 4, coordinates: { q: 0, r: 6, s: -6 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 0, r: 7, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 0, r: 8, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 6, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 7, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 8, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 5, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 6, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 7, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 5, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 6, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 7, s: -10 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 4, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 5, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 6, s: -10 }, terrain: 'water', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 4, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 5, s: -10 }, terrain: 'mountain', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 6, s: -11 }, terrain: 'water', territory: 'bear', structures: [], clues: [],
      },
      {
        anchor: true, tile: 5, coordinates: { q: 6, r: 3, s: -9 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 6, r: 4, s: -10 }, terrain: 'mountain', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 6, r: 5, s: -11 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 3, s: -10 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 4, s: -11 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 5, s: -12 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 2, s: -10 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 3, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 4, s: -12 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 2, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 3, s: -12 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 4, s: -13 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 1, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 2, s: -12 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 3, s: -13 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 1, s: -12 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 2, s: -13 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 3, s: -14 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 0, r: 3, s: -3 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 0, r: 4, s: -4 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 0, r: 5, s: -5 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 3, s: -4 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 4, s: -5 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 5, s: -6 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 2, s: -4 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 3, s: -5 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 4, s: -6 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 2, s: -5 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 3, s: -6 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 4, s: -7 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 1, s: -5 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 2, s: -6 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 3, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 1, s: -6 }, terrain: 'mountain', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 2, s: -7 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        anchor: true, tile: 2, coordinates: { q: 5, r: 3, s: -8 }, terrain: 'swamp', structures: [], clues: [],
      }];

    expect(received.board).toEqual(expected);
  });
  it('should double flip tile 2 correctly', () => {
    const action = {
      type: 'flip',
      payload: 2,
    };
    const received = reducer(reducer(state, action), action);
    const expected = state;
    expect(orderBy(received.board, 'tile')).toEqual(orderBy(expected.board, 'tile'));
  });
  it('should flip tile 3 correctly', () => {
    const action = {
      type: 'flip',
      payload: 3,
    };
    const received = reducer(state, action);
    const expected = [
      {
        anchor: true, tile: 0, coordinates: { q: 0, r: 0, s: 0 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 0, r: 1, s: -1 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 0, r: 2, s: -2 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 0, s: -1 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 1, s: -2 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 2, s: -3 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: -1, s: -1 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: 0, s: -2 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: 1, s: -3 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: -1, s: -2 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: 0, s: -3 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: 1, s: -4 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: -2, s: -2 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: -1, s: -3 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: 0, s: -4 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: -2, s: -3 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: -1, s: -4 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: 0, s: -5 }, terrain: 'forest', territory: 'bear', structures: [], clues: [],
      },
      {
        anchor: true, tile: 1, coordinates: { q: 6, r: -3, s: -3 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 6, r: -2, s: -4 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 6, r: -1, s: -5 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -3, s: -4 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -2, s: -5 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -1, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -4, s: -4 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -3, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -2, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -4, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -3, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -2, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -5, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -4, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -3, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -5, s: -6 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -4, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -3, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        anchor: true, tile: 2, coordinates: { q: 0, r: 3, s: -3 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 0, r: 4, s: -4 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 0, r: 5, s: -5 }, terrain: 'mountain', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 3, s: -4 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 4, s: -5 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 5, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 2, s: -4 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 3, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 4, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 2, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 3, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 4, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 1, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 2, s: -6 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 3, s: -7 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 1, s: -6 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 2, s: -7 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 3, s: -8 }, terrain: 'water', structures: [], clues: [],
      },
      {
        anchor: true, tile: 4, coordinates: { q: 0, r: 6, s: -6 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 0, r: 7, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 0, r: 8, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 6, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 7, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 8, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 5, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 6, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 7, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 5, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 6, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 7, s: -10 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 4, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 5, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 6, s: -10 }, terrain: 'water', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 4, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 5, s: -10 }, terrain: 'mountain', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 6, s: -11 }, terrain: 'water', territory: 'bear', structures: [], clues: [],
      },
      {
        anchor: true, tile: 5, coordinates: { q: 6, r: 3, s: -9 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 6, r: 4, s: -10 }, terrain: 'mountain', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 6, r: 5, s: -11 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 3, s: -10 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 4, s: -11 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 5, s: -12 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 2, s: -10 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 3, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 4, s: -12 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 2, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 3, s: -12 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 4, s: -13 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 1, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 2, s: -12 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 3, s: -13 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 1, s: -12 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 2, s: -13 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 3, s: -14 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 6, r: 0, s: -6 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 6, r: 1, s: -7 }, terrain: 'water', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 6, r: 2, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 0, s: -7 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 1, s: -8 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 2, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: -1, s: -7 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: 0, s: -8 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: 1, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: -1, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: 0, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: 1, s: -10 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: -2, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: -1, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: 0, s: -10 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: -2, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: -1, s: -10 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        anchor: true, tile: 3, coordinates: { q: 11, r: 0, s: -11 }, terrain: 'desert', structures: [], clues: [],
      },
    ];

    expect(received.board).toEqual(expected);
  });
  it('should double flip tile 3 correctly', () => {
    const action = {
      type: 'flip',
      payload: 3,
    };
    const received = reducer(reducer(state, action), action);
    const expected = state;
    expect(orderBy(received.board, 'tile')).toEqual(orderBy(expected.board, 'tile'));
  });
  it('should flip tile 4 correctly', () => {
    const action = {
      type: 'flip',
      payload: 4,
    };
    const received = reducer(state, action);
    const expected = [
      {
        anchor: true, tile: 0, coordinates: { q: 0, r: 0, s: 0 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 0, r: 1, s: -1 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 0, r: 2, s: -2 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 0, s: -1 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 1, s: -2 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 2, s: -3 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: -1, s: -1 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: 0, s: -2 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: 1, s: -3 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: -1, s: -2 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: 0, s: -3 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: 1, s: -4 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: -2, s: -2 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: -1, s: -3 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: 0, s: -4 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: -2, s: -3 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: -1, s: -4 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: 0, s: -5 }, terrain: 'forest', territory: 'bear', structures: [], clues: [],
      },
      {
        anchor: true, tile: 1, coordinates: { q: 6, r: -3, s: -3 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 6, r: -2, s: -4 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 6, r: -1, s: -5 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -3, s: -4 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -2, s: -5 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -1, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -4, s: -4 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -3, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -2, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -4, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -3, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -2, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -5, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -4, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -3, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -5, s: -6 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -4, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -3, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        anchor: true, tile: 2, coordinates: { q: 0, r: 3, s: -3 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 0, r: 4, s: -4 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 0, r: 5, s: -5 }, terrain: 'mountain', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 3, s: -4 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 4, s: -5 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 5, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 2, s: -4 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 3, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 4, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 2, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 3, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 4, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 1, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 2, s: -6 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 3, s: -7 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 1, s: -6 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 2, s: -7 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 3, s: -8 }, terrain: 'water', structures: [], clues: [],
      },
      {
        anchor: true, tile: 3, coordinates: { q: 6, r: 0, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 6, r: 1, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 6, r: 2, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 0, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 1, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 2, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: -1, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: 0, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: 1, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: -1, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: 0, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: 1, s: -10 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: -2, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: -1, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: 0, s: -10 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: -2, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: -1, s: -10 }, terrain: 'water', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: 0, s: -11 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        anchor: true, tile: 5, coordinates: { q: 6, r: 3, s: -9 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 6, r: 4, s: -10 }, terrain: 'mountain', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 6, r: 5, s: -11 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 3, s: -10 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 4, s: -11 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 5, s: -12 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 2, s: -10 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 3, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 4, s: -12 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 2, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 3, s: -12 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 4, s: -13 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 1, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 2, s: -12 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 3, s: -13 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 1, s: -12 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 2, s: -13 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 3, s: -14 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 0, r: 6, s: -6 }, terrain: 'water', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 0, r: 7, s: -7 }, terrain: 'mountain', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 0, r: 8, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 6, s: -7 }, terrain: 'water', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 7, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 8, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 5, s: -7 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 6, s: -8 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 7, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 5, s: -8 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 6, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 7, s: -10 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 4, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 5, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 6, s: -10 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 4, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 5, s: -10 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        anchor: true, tile: 4, coordinates: { q: 5, r: 6, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
    ];
    expect(received.board).toEqual(expected);
  });
  it('should double flip tile 4 correctly', () => {
    const action = {
      type: 'flip',
      payload: 4,
    };
    const received = reducer(reducer(state, action), action);
    const expected = state;
    expect(orderBy(received.board, 'tile')).toEqual(orderBy(expected.board, 'tile'));
  });
  it('should flip tile 5 correctly', () => {
    const action = {
      type: 'flip',
      payload: 5,
    };
    const received = reducer(state, action);
    const expected = [
      {
        anchor: true, tile: 0, coordinates: { q: 0, r: 0, s: 0 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 0, r: 1, s: -1 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 0, r: 2, s: -2 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 0, s: -1 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 1, s: -2 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 1, r: 2, s: -3 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: -1, s: -1 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: 0, s: -2 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 2, r: 1, s: -3 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: -1, s: -2 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: 0, s: -3 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 3, r: 1, s: -4 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: -2, s: -2 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: -1, s: -3 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 4, r: 0, s: -4 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: -2, s: -3 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: -1, s: -4 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 0, coordinates: { q: 5, r: 0, s: -5 }, terrain: 'forest', territory: 'bear', structures: [], clues: [],
      },
      {
        anchor: true, tile: 1, coordinates: { q: 6, r: -3, s: -3 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 6, r: -2, s: -4 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 6, r: -1, s: -5 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -3, s: -4 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -2, s: -5 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 7, r: -1, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -4, s: -4 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -3, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 8, r: -2, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -4, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -3, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 9, r: -2, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -5, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -4, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 10, r: -3, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -5, s: -6 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -4, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 1, coordinates: { q: 11, r: -3, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        anchor: true, tile: 2, coordinates: { q: 0, r: 3, s: -3 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 0, r: 4, s: -4 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 0, r: 5, s: -5 }, terrain: 'mountain', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 3, s: -4 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 4, s: -5 }, terrain: 'swamp', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 1, r: 5, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 2, s: -4 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 3, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 2, r: 4, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 2, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 3, s: -6 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 3, r: 4, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 1, s: -5 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 2, s: -6 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 4, r: 3, s: -7 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 1, s: -6 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 2, s: -7 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 2, coordinates: { q: 5, r: 3, s: -8 }, terrain: 'water', structures: [], clues: [],
      },
      {
        anchor: true, tile: 3, coordinates: { q: 6, r: 0, s: -6 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 6, r: 1, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 6, r: 2, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 0, s: -7 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 1, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 7, r: 2, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: -1, s: -7 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: 0, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 8, r: 1, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: -1, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: 0, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 9, r: 1, s: -10 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: -2, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: -1, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 10, r: 0, s: -10 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: -2, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: -1, s: -10 }, terrain: 'water', territory: 'cougar', structures: [], clues: [],
      },
      {
        tile: 3, coordinates: { q: 11, r: 0, s: -11 }, terrain: 'forest', territory: 'cougar', structures: [], clues: [],
      },
      {
        anchor: true, tile: 4, coordinates: { q: 0, r: 6, s: -6 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 0, r: 7, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 0, r: 8, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 6, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 7, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 1, r: 8, s: -9 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 5, s: -7 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 6, s: -8 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 2, r: 7, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 5, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 6, s: -9 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 3, r: 7, s: -10 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 4, s: -8 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 5, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 4, r: 6, s: -10 }, terrain: 'water', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 4, s: -9 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 5, s: -10 }, terrain: 'mountain', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 4, coordinates: { q: 5, r: 6, s: -11 }, terrain: 'water', territory: 'bear', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 6, r: 3, s: -9 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 6, r: 4, s: -10 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 6, r: 5, s: -11 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 3, s: -10 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 4, s: -11 }, terrain: 'forest', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 7, r: 5, s: -12 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 2, s: -10 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 3, s: -11 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 8, r: 4, s: -12 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 2, s: -11 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 3, s: -12 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 9, r: 4, s: -13 }, terrain: 'swamp', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 1, s: -11 }, terrain: 'water', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 2, s: -12 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 10, r: 3, s: -13 }, terrain: 'desert', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 1, s: -12 }, terrain: 'mountain', structures: [], clues: [],
      },
      {
        tile: 5, coordinates: { q: 11, r: 2, s: -13 }, terrain: 'mountain', territory: 'bear', structures: [], clues: [],
      },
      {
        anchor: true, tile: 5, coordinates: { q: 11, r: 3, s: -14 }, terrain: 'desert', territory: 'bear', structures: [], clues: [],
      },
    ];
    expect(received.board).toEqual(expected);
  });
  it('should double flip tile 5 correctly', () => {
    const action = {
      type: 'flip',
      payload: 5,
    };
    const received = reducer(reducer(state, action), action);
    const expected = state;
    expect(orderBy(received.board, 'tile')).toEqual(orderBy(expected.board, 'tile'));
  });
});
