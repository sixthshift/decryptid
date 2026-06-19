import { zip } from 'lodash';
import { useGameContext } from '../../../context';
import { modelPropType } from '../../prop-types';
import { toPoints } from '../utils';
import Token from './token';

function Tokens({ model }) {
  const [
    {
      ui: { radius },
    },
  ] = useGameContext();
  const tokens = [...model.structures, ...model.clues];
  const positions = (() => {
    if (tokens.length === 1) {
      // If only 1 token, centre it
      return [{ x: 0, y: 0 }];
    }
    if (tokens.length === 2) {
      // If there are 2 tokens, then put them side by side without any in the middle
      return toPoints(tokens.length, radius * 0.5);
    }
    // For all else, place one in the middle, and the rest in a circle around it
    return [{ x: 0, y: 0 }, ...toPoints(tokens.length - 1, radius * 0.5)];
  })();
  return (
    <g>
      {zip(tokens, positions).map(([token, { x, y }]) => (
        <Token key={JSON.stringify(token)} token={token} transform={`translate(${x}, ${y})`} />
      ))}
    </g>
  );
}

Tokens.propTypes = {
  model: modelPropType.isRequired,
};

export default Tokens;
