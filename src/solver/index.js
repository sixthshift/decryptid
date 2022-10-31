/* eslint-disable comma-dangle */
import {
  difference, times, union
} from 'lodash';
import ruleset from './rules';

/**
 *
 * @param board
 * @param hex
 * @param radius
 * @returns A list of the neighbour hexes from the input hex according to the input radius
 */
export const navigate = (board, hex, radius) => {
  let within = [hex];
  const movements = [
    { q: 1, r: -1, s: 0 },
    { q: -1, r: 1, s: 0 },
    { q: 1, r: 0, s: -1 },
    { q: -1, r: 0, s: 1 },
    { q: 0, r: 1, s: -1 },
    { q: 0, r: -1, s: 1 },
  ];
  times(radius, () => {
    /**
     * The radius determines how many iterations run, as this will expand one layer around the starting hex each time
     * calculate the new neighbours of all the hexes currently in the 'within' list
     * Each iteration will sucessively expand one layer out, this is how you get all the neighbours of 'n radius' around a hex
     */
    within.forEach((hexWithin) => {
      const neighbours = movements.reduce((acc, movement) => {
      /**
       * Attempt to find the neighbour of the current hex with the given movement
       * This should be successful so long as the hex exists, i.e. it is not on the edge of the baord
       * If this neighbour exists, add it to the accumulator
       */
        const neighbour = board.find((hexFromBoard) => (
          hexFromBoard.coordinates.q === hexWithin.coordinates.q + movement.q
        && hexFromBoard.coordinates.r === hexWithin.coordinates.r + movement.r
        && hexFromBoard.coordinates.s === hexWithin.coordinates.s + movement.s
        ));
        if (neighbour) {
          acc.push(neighbour);
        }

        return acc;
      }, []);
      within = union(within, neighbours);
    });
  });

  return within;
};

/**
 * Partition the board into hexes that satisfy the rule and hexes that do not satisfy the rule
 * @param {*} board
 * @param {*} rule
 * @returns A tuple of two lists where
 * the first value is the list of hexes that satisfy the rule,
 * the second value is the list of hexes that do not satisfy the rule
 */
export const evaluate = (board, rule) => {
  let hexesWithinRule = union(
    board
      .filter((hex) => {
        if (rule.type === 'structure') {
          return hex.structures
            .map((structure) => structure.type)
            .some((structure) => rule.value.includes(structure));
        }
        if (rule.type === 'colour') {
          return hex.structures
            .map((structure) => structure.colour)
            .some((structure) => rule.value.includes(structure));
        }
        return rule.value.includes(hex[rule.type]);
      }) // Start with the directly satisfying hexes first
      .map((hex) => navigate(board, hex, rule.within)) // Get all other hex within the rule radius
      .flat()
  );
  let hexesBeyondRule = difference(board, hexesWithinRule); // Collect the remaining hexes that have not satisfied the rule
  if (rule.inverted) {
    [hexesWithinRule, hexesBeyondRule] = [hexesBeyondRule, hexesWithinRule];
  }
  return [hexesWithinRule, hexesBeyondRule];
};

/**
 * Determine whether a rule is valid for a player's colour or not based on their placement of cubes and discs
 * @param {*} board
 * @param {*} rule
 * @param {*} colour
 * @returns A boolean result of whether the player's colour can satisfy this rule
 */
export const isRuleValidForColour = (board, rule, colour) => {
  const [hexesWithinRule, hexesBeyondRule] = evaluate(board, rule);
  const hexesWithinRuleSatisifies = hexesWithinRule.every((hex) => {
    /**
     * To pass, this hex must:
     * (not contain a cube) AND (either contain a disc or nothing)
     */
    const containsCube = hex.hints.some((hint) => (hint.type === 'cube' && hint.colour === colour));
    const containsDisc = hex.hints.some((hint) => (hint.type === 'disc' && hint.colour === colour));
    const containsNothing = !hex.hints.some((hint) => (hint.colour === colour));
    return !containsCube && (containsDisc || containsNothing);
  });
  const hexBeyondRuleSatisfies = hexesBeyondRule.every((hex) => {
    /**
     * To pass, this hex must:
     * (not contain a disc) AND (either contain a cube or nothing)
     */
    const containsCube = hex.hints.some((hint) => (hint.type === 'cube' && hint.colour === colour));
    const containsDisc = hex.hints.some((hint) => (hint.type === 'disc' && hint.colour === colour));
    const containsNothing = !hex.hints.some((hint) => (hint.colour === colour));

    return !containsDisc && (containsCube || containsNothing);
  });

  return hexesWithinRuleSatisifies && hexBeyondRuleSatisfies;
};

/**
 * For a player, generate a list of candidate rules based on their hints
 * This is done by evaluating every rule and checking its validity
 * @param {*} board
 * @param {*} rules
 * @param {*} player
 * @returns A list of candidate rules
 */
export const solveForPlayer = (board, rules, player) => rules.filter((rule) => isRuleValidForColour(board, rule, player.colour));

/**
 * For every player, generate their list of candidate rules
 * @param {*} game
 * @returns An object containing each player's candidate rules
 */
export const solve = (game) => game.players.reduce((acc, player) => {
  acc[player.colour] = solveForPlayer(game.board, ruleset, player);
  return acc;
}, {});
