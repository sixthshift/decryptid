import { negate, sortBy } from 'lodash';
import {
  decrypt,
  evaluate, isRuleValidForColour, navigate, solve,
} from '.';

import reducer from '../../reducers';

const byCoordinates = ({ q, r, s }) => (hex) => (
  hex.coordinates.q === q
  && hex.coordinates.r === r
  && hex.coordinates.s === s
);

describe('Solver', () => {
  let state;
  beforeEach(() => {
    state = reducer(undefined, { type: undefined });
  });
  describe('Navigate', () => {
    it('should correctly determine all neighbours of a hex (0,0,0) with radius 0', () => {
      const { game: { board } } = state;
      const hex = board.find(byCoordinates({ q: 0, r: 0, s: 0 }));
      const received = navigate(board, hex, 0);
      const expected = board.filter((hexFromBoard) => [
        { q: 0, r: 0, s: 0 },
      ].some((neighbour) => byCoordinates(neighbour)(hexFromBoard)));
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
    it('should correctly determine all neighbours of a hex (0,0,0) with radius 1', () => {
      const { game: { board } } = state;
      const hex = board.find(byCoordinates({ q: 0, r: 0, s: 0 }));
      const received = navigate(board, hex, 1);
      const expected = board.filter((hexFromBoard) => [
        { q: 0, r: 0, s: 0 },
        { q: 0, r: 1, s: -1 },
        { q: 1, r: 0, s: -1 },
      ].some((neighbour) => byCoordinates(neighbour)(hexFromBoard)));
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
    it('should correctly determine all neighbours of a hex (0,0,0) with radius 2', () => {
      const { game: { board } } = state;
      const hex = board.find(byCoordinates({ q: 0, r: 0, s: 0 }));
      const received = navigate(board, hex, 2);
      const expected = board.filter((hexFromBoard) => [
        { q: 0, r: 0, s: 0 },
        { q: 0, r: 1, s: -1 },
        { q: 0, r: 2, s: -2 },
        { q: 1, r: 0, s: -1 },
        { q: 1, r: 1, s: -2 },
        { q: 2, r: -1, s: -1 },
        { q: 2, r: 0, s: -2 },
      ].some((neighbour) => byCoordinates(neighbour)(hexFromBoard)));
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
    it('should correctly determine all neighbours of a hex (0,0,0) with radius 3', () => {
      const { game: { board } } = state;
      const hex = board.find(byCoordinates({ q: 0, r: 0, s: 0 }));
      const received = navigate(board, hex, 3);
      const expected = board.filter((hexFromBoard) => [
        { q: 0, r: 0, s: 0 },
        { q: 0, r: 1, s: -1 },
        { q: 0, r: 2, s: -2 },
        { q: 0, r: 3, s: -3 },
        { q: 1, r: 0, s: -1 },
        { q: 1, r: 1, s: -2 },
        { q: 1, r: 2, s: -3 },
        { q: 2, r: -1, s: -1 },
        { q: 2, r: 0, s: -2 },
        { q: 2, r: 1, s: -3 },
        { q: 3, r: -0, s: -3 },
        { q: 3, r: -1, s: -2 },
      ].some((neighbour) => byCoordinates(neighbour)(hexFromBoard)));
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
    it('should correctly determine all neighbours of a hex (11,3,-14) with radius 0', () => {
      const { game: { board } } = state;
      const hex = board.find(byCoordinates({ q: 11, r: 3, s: -14 }));
      const received = navigate(board, hex, 0);
      const expected = board.filter((hexFromBoard) => [
        { q: 11, r: 3, s: -14 },
      ].some((neighbour) => byCoordinates(neighbour)(hexFromBoard)));
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
    it('should correctly determine all neighbours of a hex (11,3,-14) with radius 1', () => {
      const { game: { board } } = state;
      const hex = board.find(byCoordinates({ q: 11, r: 3, s: -14 }));
      const received = navigate(board, hex, 1);
      const expected = board.filter((hexFromBoard) => [
        { q: 10, r: 3, s: -13 },
        { q: 11, r: 2, s: -13 },
        { q: 11, r: 3, s: -14 },
      ].some((neighbour) => byCoordinates(neighbour)(hexFromBoard)));
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
    it('should correctly determine all neighbours of a hex (11,3,-14) with radius 2', () => {
      const { game: { board } } = state;
      const hex = board.find(byCoordinates({ q: 11, r: 3, s: -14 }));
      const received = navigate(board, hex, 2);
      const expected = board.filter((hexFromBoard) => [
        { q: 9, r: 3, s: -12 },
        { q: 9, r: 4, s: -13 },
        { q: 10, r: 2, s: -12 },
        { q: 10, r: 3, s: -13 },
        { q: 11, r: 1, s: -12 },
        { q: 11, r: 2, s: -13 },
        { q: 11, r: 3, s: -14 },
      ].some((neighbour) => byCoordinates(neighbour)(hexFromBoard)));
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
    it('should correctly determine all neighbours of a hex (11,3,-14) with radius 3', () => {
      const { game: { board } } = state;
      const hex = board.find(byCoordinates({ q: 11, r: 3, s: -14 }));
      const received = navigate(board, hex, 3);
      const expected = board.filter((hexFromBoard) => [
        { q: 8, r: 3, s: -11 },
        { q: 8, r: 4, s: -12 },
        { q: 9, r: 2, s: -11 },
        { q: 9, r: 3, s: -12 },
        { q: 9, r: 4, s: -13 },
        { q: 10, r: 1, s: -11 },
        { q: 10, r: 2, s: -12 },
        { q: 10, r: 3, s: -13 },
        { q: 11, r: 0, s: -11 },
        { q: 11, r: 1, s: -12 },
        { q: 11, r: 2, s: -13 },
        { q: 11, r: 3, s: -14 },
      ].some((neighbour) => byCoordinates(neighbour)(hexFromBoard)));
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
    it('should correctly determine all neighbours of a hex (3,2,-5) with radius 0', () => {
      const { game: { board } } = state;
      const hex = board.find(byCoordinates({ q: 3, r: 2, s: -5 }));
      const received = navigate(board, hex, 0);
      const expected = board.filter((hexFromBoard) => [
        { q: 3, r: 2, s: -5 },
      ].some((neighbour) => byCoordinates(neighbour)(hexFromBoard)));
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
    it('should correctly determine all neighbours of a hex (3,2,-5) with radius 1', () => {
      const { game: { board } } = state;
      const hex = board.find(byCoordinates({ q: 3, r: 2, s: -5 }));
      const received = navigate(board, hex, 1);
      const expected = board.filter((hexFromBoard) => [
        { q: 2, r: 2, s: -4 },
        { q: 2, r: 3, s: -5 },
        { q: 3, r: 1, s: -4 },
        { q: 3, r: 2, s: -5 },
        { q: 3, r: 3, s: -6 },
        { q: 4, r: 1, s: -5 },
        { q: 4, r: 2, s: -6 },
      ].some((neighbour) => byCoordinates(neighbour)(hexFromBoard)));
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
    it('should correctly determine all neighbours of a hex (3,2,-5) with radius 2', () => {
      const { game: { board } } = state;
      const hex = board.find(byCoordinates({ q: 3, r: 2, s: -5 }));
      const received = navigate(board, hex, 2);
      const expected = board.filter((hexFromBoard) => [
        { q: 1, r: 2, s: -3 },
        { q: 1, r: 3, s: -4 },
        { q: 1, r: 4, s: -5 },
        { q: 2, r: 1, s: -3 },
        { q: 2, r: 2, s: -4 },
        { q: 2, r: 3, s: -5 },
        { q: 2, r: 4, s: -6 },
        { q: 3, r: 0, s: -3 },
        { q: 3, r: 1, s: -4 },
        { q: 3, r: 2, s: -5 },
        { q: 3, r: 3, s: -6 },
        { q: 3, r: 4, s: -7 },
        { q: 4, r: 0, s: -4 },
        { q: 4, r: 1, s: -5 },
        { q: 4, r: 2, s: -6 },
        { q: 4, r: 3, s: -7 },
        { q: 5, r: 0, s: -5 },
        { q: 5, r: 1, s: -6 },
        { q: 5, r: 2, s: -7 },
      ].some((neighbour) => byCoordinates(neighbour)(hexFromBoard)));
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
    it('should correctly determine all neighbours of a hex (3,2,-5) with radius 3', () => {
      const { game: { board } } = state;
      const hex = board.find(byCoordinates({ q: 3, r: 2, s: -5 }));
      const received = navigate(board, hex, 3);
      const expected = board.filter((hexFromBoard) => [
        { q: 0, r: 2, s: -2 },
        { q: 0, r: 3, s: -3 },
        { q: 0, r: 4, s: -4 },
        { q: 0, r: 5, s: -5 },
        { q: 1, r: 1, s: -2 },
        { q: 1, r: 2, s: -3 },
        { q: 1, r: 3, s: -4 },
        { q: 1, r: 4, s: -5 },
        { q: 1, r: 5, s: -6 },
        { q: 2, r: 0, s: -2 },
        { q: 2, r: 1, s: -3 },
        { q: 2, r: 2, s: -4 },
        { q: 2, r: 3, s: -5 },
        { q: 2, r: 4, s: -6 },
        { q: 2, r: 5, s: -7 },
        { q: 3, r: -1, s: -2 },
        { q: 3, r: 0, s: -3 },
        { q: 3, r: 1, s: -4 },
        { q: 3, r: 2, s: -5 },
        { q: 3, r: 3, s: -6 },
        { q: 3, r: 4, s: -7 },
        { q: 3, r: 5, s: -8 },
        { q: 4, r: -1, s: -3 },
        { q: 4, r: 0, s: -4 },
        { q: 4, r: 1, s: -5 },
        { q: 4, r: 2, s: -6 },
        { q: 4, r: 3, s: -7 },
        { q: 4, r: 4, s: -8 },
        { q: 5, r: -1, s: -4 },
        { q: 5, r: 0, s: -5 },
        { q: 5, r: 1, s: -6 },
        { q: 5, r: 2, s: -7 },
        { q: 5, r: 3, s: -8 },
        { q: 6, r: -1, s: -5 },
        { q: 6, r: 0, s: -6 },
        { q: 6, r: 1, s: -7 },
        { q: 6, r: 2, s: -8 },
      ].some((neighbour) => byCoordinates(neighbour)(hexFromBoard)));
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
  });
  describe('Evaluate', () => {
    it('should correctly partition hexes for rule [0 within forest or desert]', () => {
      const { game: { board } } = state;
      const rule = {
        within: 0,
        type: 'terrain',
        value: ['forest', 'desert'],
      };
      const received = evaluate(board, rule);
      const expected = [
        board.filter((hex) => hex.terrain === 'forest' || hex.terrain === 'desert'),
        board.filter(negate((hex) => hex.terrain === 'forest' || hex.terrain === 'desert')),
      ];
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
    it('should correctly partition hexes for rule [1 within forest]', () => {
      const { game: { board } } = state;
      const rule = {
        within: 1,
        type: 'terrain',
        value: ['forest'],
      };
      const received = evaluate(board, rule);
      const expected = [
        [
          { q: 4, r: -2, s: -2 },
          { q: 3, r: -1, s: -2 },
          { q: 5, r: -2, s: -3 },
          { q: 4, r: -1, s: -3 },
          { q: 3, r: 0, s: -3 },
          { q: 5, r: -1, s: -4 },
          { q: 4, r: 0, s: -4 },
          { q: 6, r: -3, s: -3 },
          { q: 6, r: -2, s: -4 },
          { q: 6, r: -1, s: -5 },
          { q: 5, r: 0, s: -5 },
          { q: 4, r: 1, s: -5 },
          { q: 6, r: 0, s: -6 },
          { q: 5, r: 1, s: -6 },
          { q: 7, r: -3, s: -4 },
          { q: 8, r: -4, s: -4 },
          { q: 8, r: -3, s: -5 },
          { q: 7, r: -2, s: -5 },
          { q: 9, r: -4, s: -5 },
          { q: 9, r: -3, s: -6 },
          { q: 8, r: -2, s: -6 },
          { q: 10, r: -5, s: -5 },
          { q: 10, r: -4, s: -6 },
          { q: 11, r: -5, s: -6 },
          { q: 11, r: -4, s: -7 },
          { q: 2, r: 2, s: -4 },
          { q: 3, r: 1, s: -4 },
          { q: 1, r: 3, s: -4 },
          { q: 3, r: 2, s: -5 },
          { q: 1, r: 2, s: -3 },
          { q: 2, r: 3, s: -5 },
          { q: 2, r: 1, s: -3 },
          { q: 1, r: 4, s: -5 },
          { q: 3, r: 3, s: -6 },
          { q: 2, r: 4, s: -6 },
          { q: 4, r: 2, s: -6 },
          { q: 9, r: 1, s: -10 },
          { q: 10, r: 0, s: -10 },
          { q: 8, r: 2, s: -10 },
          { q: 10, r: 1, s: -11 },
          { q: 8, r: 1, s: -9 },
          { q: 9, r: 2, s: -11 },
          { q: 9, r: 0, s: -9 },
          { q: 11, r: -1, s: -10 },
          { q: 11, r: 0, s: -11 },
          { q: 10, r: -1, s: -9 },
          { q: 11, r: 1, s: -12 },
          { q: 10, r: 2, s: -12 },
          { q: 9, r: 3, s: -12 },
          { q: 11, r: 2, s: -13 },
          { q: 10, r: 3, s: -13 },
          { q: 11, r: 3, s: -14 },
        ].map((coordinates) => board.find(byCoordinates(coordinates))),
        [
          { q: 0, r: 0, s: 0 },
          { q: 0, r: 1, s: -1 },
          { q: 0, r: 2, s: -2 },
          { q: 1, r: 0, s: -1 },
          { q: 1, r: 1, s: -2 },
          { q: 2, r: -1, s: -1 },
          { q: 2, r: 0, s: -2 },
          { q: 7, r: -1, s: -6 },
          { q: 9, r: -2, s: -7 },
          { q: 10, r: -3, s: -7 },
          { q: 11, r: -3, s: -8 },
          { q: 0, r: 3, s: -3 },
          { q: 0, r: 4, s: -4 },
          { q: 0, r: 5, s: -5 },
          { q: 1, r: 5, s: -6 },
          { q: 3, r: 4, s: -7 },
          { q: 4, r: 3, s: -7 },
          { q: 5, r: 2, s: -7 },
          { q: 5, r: 3, s: -8 },
          { q: 6, r: 1, s: -7 },
          { q: 6, r: 2, s: -8 },
          { q: 7, r: 0, s: -7 },
          { q: 7, r: 1, s: -8 },
          { q: 7, r: 2, s: -9 },
          { q: 8, r: -1, s: -7 },
          { q: 8, r: 0, s: -8 },
          { q: 9, r: -1, s: -8 },
          { q: 10, r: -2, s: -8 },
          { q: 11, r: -2, s: -9 },
          { q: 0, r: 6, s: -6 },
          { q: 0, r: 7, s: -7 },
          { q: 0, r: 8, s: -8 },
          { q: 1, r: 6, s: -7 },
          { q: 1, r: 7, s: -8 },
          { q: 1, r: 8, s: -9 },
          { q: 2, r: 5, s: -7 },
          { q: 2, r: 6, s: -8 },
          { q: 2, r: 7, s: -9 },
          { q: 3, r: 5, s: -8 },
          { q: 3, r: 6, s: -9 },
          { q: 3, r: 7, s: -10 },
          { q: 4, r: 4, s: -8 },
          { q: 4, r: 5, s: -9 },
          { q: 4, r: 6, s: -10 },
          { q: 5, r: 4, s: -9 },
          { q: 5, r: 5, s: -10 },
          { q: 5, r: 6, s: -11 },
          { q: 6, r: 3, s: -9 },
          { q: 6, r: 4, s: -10 },
          { q: 6, r: 5, s: -11 },
          { q: 7, r: 3, s: -10 },
          { q: 7, r: 4, s: -11 },
          { q: 7, r: 5, s: -12 },
          { q: 8, r: 3, s: -11 },
          { q: 8, r: 4, s: -12 },
          { q: 9, r: 4, s: -13 },
        ].map((coordinates) => board.find(byCoordinates(coordinates))),
      ];
      expect(sortBy(received, JSON.stringify)).toEqual(sortBy(expected, JSON.stringify));
    });
  });
  describe('isRuleValidForColour', () => {
    it('should pass rule for initial board', () => {
      const { game: { board } } = state;
      const rule = {
        within: 0,
        type: 'terrain',
        value: ['forest', 'desert'],
      };
      const received = isRuleValidForColour(board, rule, 'alpha');
      const expected = true;
      expect(received).toBe(expected);
    });
    it('should fail rule for cube placed in forest', () => {
      const action = {
        type: 'place',
        payload: {
          coordinates: { q: 4, r: -2, s: -2 },
          mode: 'cube',
          colour: 'alpha',
        },
      };
      state = reducer(state, action);
      const { game: { board } } = state;
      const rule = {
        within: 0,
        type: 'terrain',
        value: ['forest', 'desert'],
      };
      const received = isRuleValidForColour(board, rule, 'alpha');
      const expected = false;
      expect(received).toBe(expected);
    });
    it('should fail rule for cube placed in desert', () => {
      const action = {
        type: 'place',
        payload: {
          coordinates: { q: 3, r: 0, s: -3 },
          mode: 'cube',
          colour: 'alpha',
        },
      };
      state = reducer(state, action);
      const { game: { board } } = state;
      const rule = {
        within: 0,
        type: 'terrain',
        value: ['forest', 'desert'],
      };
      const received = isRuleValidForColour(board, rule, 'alpha');
      const expected = false;
      expect(received).toBe(expected);
    });
    it('should pass rule for cube placed in water', () => {
      const action = {
        type: 'place',
        payload: {
          coordinates: { q: 3, r: -1, s: -2 },
          mode: 'cube',
          colour: 'alpha',
        },
      };
      state = reducer(state, action);
      const { game: { board } } = state;
      const rule = {
        within: 0,
        type: 'terrain',
        value: ['forest', 'desert'],
      };
      const received = isRuleValidForColour(board, rule, 'alpha');
      const expected = true;
      expect(received).toBe(expected);
    });
  });
  describe('Solve', () => {
    it('should solve and return the correct rules', () => {
      /**
       * alpha: within two spaces of bear territory
       * beta: on water or mountains
       * gamma: not within one space of desert
       * delta: within three spaces of a white structure
       * epsilon: not within two spaces of a standing stone
       */
      const actions = [
        { type: 'switch', payload: { idA: 1, idB: 2 } },
        { type: 'switch', payload: { idA: 5, idB: 2 } },
        { type: 'switch', payload: { idA: 4, idB: 2 } },
        { type: 'switch', payload: { idA: 3, idB: 2 } },
        { type: 'switch', payload: { idA: 2, idB: 0 } },
        { type: 'flip', payload: 2 },
        { type: 'flip', payload: 5 },
        { type: 'flip', payload: 0 },
        { type: 'flip', payload: 3 },
        { type: 'place', payload: { mode: 'stone', colour: 'blue', coordinates: { q: 3, r: 2, s: -5 } } },
        { type: 'place', payload: { mode: 'stone', colour: 'green', coordinates: { q: 5, r: 2, s: -7 } } },
        { type: 'place', payload: { mode: 'stone', colour: 'white', coordinates: { q: 10, r: 3, s: -13 } } },
        { type: 'place', payload: { mode: 'stone', colour: 'black', coordinates: { q: 3, r: 6, s: -9 } } },
        { type: 'place', payload: { mode: 'shack', colour: 'blue', coordinates: { q: 3, r: 1, s: -4 } } },
        { type: 'place', payload: { mode: 'shack', colour: 'green', coordinates: { q: 8, r: 4, s: -12 } } },
        { type: 'place', payload: { mode: 'shack', colour: 'white', coordinates: { q: 7, r: 1, s: -8 } } },
        { type: 'place', payload: { mode: 'shack', colour: 'black', coordinates: { q: 0, r: 3, s: -3 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'alpha', coordinates: { q: 8, r: -4, s: -4 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'alpha', coordinates: { q: 10, r: 0, s: -10 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'alpha', coordinates: { q: 9, r: 1, s: -10 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'alpha', coordinates: { q: 5, r: 6, s: -11 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'alpha', coordinates: { q: 2, r: 6, s: -8 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'alpha', coordinates: { q: 1, r: 7, s: -8 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'alpha', coordinates: { q: 3, r: 4, s: -7 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'alpha', coordinates: { q: 5, r: -1, s: -4 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'alpha', coordinates: { q: 5, r: 1, s: -6 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'alpha', coordinates: { q: 7, r: -1, s: -6 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'alpha', coordinates: { q: 9, r: -2, s: -7 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'alpha', coordinates: { q: 8, r: 0, s: -8 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'alpha', coordinates: { q: 8, r: 1, s: -9 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'alpha', coordinates: { q: 9, r: 3, s: -12 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'alpha', coordinates: { q: 10, r: 3, s: -13 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'alpha', coordinates: { q: 11, r: 2, s: -13 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 4, r: 0, s: -4 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 6, r: -1, s: -5 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 7, r: -2, s: -5 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 8, r: -2, s: -6 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 9, r: -2, s: -7 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 10, r: -2, s: -8 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 11, r: -2, s: -9 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 10, r: -1, s: -9 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 11, r: -1, s: -10 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 6, r: 0, s: -6 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 7, r: 0, s: -7 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'beta', coordinates: { q: 2, r: 0, s: -2 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'beta', coordinates: { q: 8, r: 1, s: -9 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'beta', coordinates: { q: 10, r: 3, s: -13 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'beta', coordinates: { q: 11, r: 2, s: -13 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'beta', coordinates: { q: 11, r: 0, s: -11 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 11, r: -4, s: -7 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 7, r: -1, s: -6 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 8, r: -1, s: -7 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 9, r: -1, s: -8 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 8, r: 0, s: -8 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 8, r: 1, s: -9 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 6, r: 3, s: -9 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 9, r: 3, s: -12 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 2, r: 5, s: -7 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 4, r: 3, s: -7 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 3, r: 3, s: -6 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'gamma', coordinates: { q: 1, r: 0, s: -1 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'gamma', coordinates: { q: 5, r: 0, s: -5 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'gamma', coordinates: { q: 5, r: -1, s: -4 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'gamma', coordinates: { q: 10, r: 1, s: -11 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'gamma', coordinates: { q: 11, r: 2, s: -13 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'gamma', coordinates: { q: 0, r: 7, s: -7 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'gamma', coordinates: { q: 1, r: 5, s: -6 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'gamma', coordinates: { q: 9, r: 4, s: -13 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'delta', coordinates: { q: 5, r: -1, s: -4 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'delta', coordinates: { q: 10, r: -3, s: -7 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'delta', coordinates: { q: 10, r: -4, s: -6 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'delta', coordinates: { q: 11, r: -5, s: -6 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'delta', coordinates: { q: 1, r: 5, s: -6 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'delta', coordinates: { q: 2, r: 7, s: -9 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'delta', coordinates: { q: 4, r: 2, s: -6 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'delta', coordinates: { q: 6, r: 1, s: -7 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'delta', coordinates: { q: 7, r: 2, s: -9 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'delta', coordinates: { q: 5, r: 4, s: -9 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'delta', coordinates: { q: 6, r: 4, s: -10 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'delta', coordinates: { q: 10, r: 1, s: -11 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'delta', coordinates: { q: 10, r: 2, s: -12 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'delta', coordinates: { q: 10, r: 3, s: -13 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'delta', coordinates: { q: 9, r: 4, s: -13 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'epsilon', coordinates: { q: 5, r: 0, s: -5 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'epsilon', coordinates: { q: 6, r: 1, s: -7 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'epsilon', coordinates: { q: 7, r: 2, s: -9 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'epsilon', coordinates: { q: 10, r: 1, s: -11 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'epsilon', coordinates: { q: 11, r: 2, s: -13 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'epsilon', coordinates: { q: 10, r: 3, s: -13 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'epsilon', coordinates: { q: 9, r: 4, s: -13 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'epsilon', coordinates: { q: 4, r: 6, s: -10 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'epsilon', coordinates: { q: 4, r: 5, s: -9 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'epsilon', coordinates: { q: 4, r: 4, s: -8 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'epsilon', coordinates: { q: 5, r: 3, s: -8 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'epsilon', coordinates: { q: 0, r: 0, s: 0 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'epsilon', coordinates: { q: 4, r: -1, s: -3 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'epsilon', coordinates: { q: 6, r: -1, s: -5 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'epsilon', coordinates: { q: 7, r: -2, s: -5 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'epsilon', coordinates: { q: 8, r: -2, s: -6 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'epsilon', coordinates: { q: 9, r: -2, s: -7 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'epsilon', coordinates: { q: 8, r: 1, s: -9 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'epsilon', coordinates: { q: 6, r: 4, s: -10 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'epsilon', coordinates: { q: 7, r: -3, s: -4 } } },
      ];
      state = actions.reduce((acc, action) => reducer(acc, action), state);
      const { game } = state;
      const received = solve(game);
      expect(received).toEqual([
        {
          within: 0,
          type: 'terrain',
          value: ['forest', 'desert'],
          text: 'On forest/desert',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['forest', 'water'],
          text: 'On forest/water',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['forest', 'swamp'],
          text: 'On forest/swamp',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['forest', 'mountain'],
          text: 'On forest/mountain',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['desert', 'water'],
          text: 'On desert/water',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['desert', 'swamp'],
          text: 'On desert/swamp',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['desert', 'mountain'],
          text: 'On desert/mountain',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['water', 'swamp'],
          text: 'On water/swamp',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['water', 'mountain'],
          text: 'On water/mountain',
          inverted: false,
          solution: {
            alpha: false, beta: true, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['swamp', 'mountain'],
          text: 'On swamp/mountain',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 1,
          type: 'terrain',
          value: ['forest'],
          text: 'Within 1 of forest',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 1,
          type: 'terrain',
          value: ['desert'],
          text: 'Within 1 of desert',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 1,
          type: 'terrain',
          value: ['swamp'],
          text: 'Within 1 of swamp',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 1,
          type: 'terrain',
          value: ['mountain'],
          text: 'Within 1 of mountain',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 1,
          type: 'terrain',
          value: ['water'],
          text: 'Within 1 of water',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 1,
          type: 'territory',
          value: ['bear', 'cougar'],
          text: 'Within 1 of bear/cougar',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 2,
          type: 'structure',
          value: ['stone'],
          text: 'Within 2 of stone',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 2,
          type: 'structure',
          value: ['shack'],
          text: 'Within 2 of shack',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 2,
          type: 'territory',
          value: ['bear'],
          text: 'Within 2 of bear',
          inverted: false,
          solution: {
            alpha: true, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 2,
          type: 'territory',
          value: ['cougar'],
          text: 'Within 2 of cougar',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 3,
          type: 'colour',
          value: ['blue'],
          text: 'Within 3 of blue',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 3,
          type: 'colour',
          value: ['white'],
          text: 'Within 3 of white',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: true, epsilon: false,
          },
        },
        {
          within: 3,
          type: 'colour',
          value: ['green'],
          text: 'Within 3 of green',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 3,
          type: 'colour',
          value: ['black'],
          text: 'Within 3 of black',
          inverted: false,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['forest', 'desert'],
          text: 'Not on forest/desert',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['forest', 'water'],
          text: 'Not on forest/water',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['forest', 'swamp'],
          text: 'Not on forest/swamp',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['forest', 'mountain'],
          text: 'Not on forest/mountain',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['desert', 'water'],
          text: 'Not on desert/water',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['desert', 'swamp'],
          text: 'Not on desert/swamp',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['desert', 'mountain'],
          text: 'Not on desert/mountain',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['water', 'swamp'],
          text: 'Not on water/swamp',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['water', 'mountain'],
          text: 'Not on water/mountain',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 0,
          type: 'terrain',
          value: ['swamp', 'mountain'],
          text: 'Not on swamp/mountain',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 1,
          type: 'terrain',
          value: ['forest'],
          text: 'Not within 1 of forest',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 1,
          type: 'terrain',
          value: ['desert'],
          text: 'Not within 1 of desert',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: true, delta: false, epsilon: false,
          },
        },
        {
          within: 1,
          type: 'terrain',
          value: ['swamp'],
          text: 'Not within 1 of swamp',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 1,
          type: 'terrain',
          value: ['mountain'],
          text: 'Not within 1 of mountain',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 1,
          type: 'terrain',
          value: ['water'],
          text: 'Not within 1 of water',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 1,
          type: 'territory',
          value: ['bear', 'cougar'],
          text: 'Not within 1 of bear/cougar',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 2,
          type: 'structure',
          value: ['stone'],
          text: 'Not within 2 of stone',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: true,
          },
        },
        {
          within: 2,
          type: 'structure',
          value: ['shack'],
          text: 'Not within 2 of shack',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 2,
          type: 'territory',
          value: ['bear'],
          text: 'Not within 2 of bear',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 2,
          type: 'territory',
          value: ['cougar'],
          text: 'Not within 2 of cougar',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 3,
          type: 'colour',
          value: ['blue'],
          text: 'Not within 3 of blue',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 3,
          type: 'colour',
          value: ['white'],
          text: 'Not within 3 of white',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 3,
          type: 'colour',
          value: ['green'],
          text: 'Not within 3 of green',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
        {
          within: 3,
          type: 'colour',
          value: ['black'],
          text: 'Not within 3 of black',
          inverted: true,
          solution: {
            alpha: false, beta: false, gamma: false, delta: false, epsilon: false,
          },
        },
      ]);
    });
  });
  describe('Decrypt', () => {
    it('should decrypt and return the correct hexes', () => {
      const actions = [
        { type: 'place', payload: { mode: 'stone', colour: 'blue', coordinates: { q: 3, r: 1, s: -4 } } },
        { type: 'place', payload: { mode: 'shack', colour: 'blue', coordinates: { q: 11, r: 3, s: -14 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'alpha', coordinates: { q: 1, r: 2, s: -3 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'alpha', coordinates: { q: 3, r: -1, s: -2 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'alpha', coordinates: { q: 5, r: 0, s: -5 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'beta', coordinates: { q: 3, r: 3, s: -6 } } },
        { type: 'place', payload: { mode: 'disc', colour: 'gamma', coordinates: { q: 9, r: -1, s: -8 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'alpha', coordinates: { q: 6, r: 0, s: -6 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 2, r: 3, s: -5 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 2, r: 5, s: -7 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'beta', coordinates: { q: 2, r: 6, s: -8 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 9, r: 0, s: -9 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 8, r: 1, s: -9 } } },
        { type: 'place', payload: { mode: 'cube', colour: 'gamma', coordinates: { q: 9, r: 1, s: -10 } } },
      ];
      state = actions.reduce((acc, action) => reducer(acc, action), state);
      state = reducer(state, { type: 'solve', payload: solve(state.game) });
      const { game } = state;
      const received = decrypt(game);
      const expected = [
        { q: 3, r: 3, s: -6 },
      ];
      expect(received).toEqual(expected);
    });
  });
});
