import { zip } from 'lodash';
import React from 'react';
import { useGameContext } from '../../../context';
import { modelPropType } from '../../prop-types';
import { toPoints } from '../utils';
import Token from './token';

function Tokens({ model }) {
  const [{ ui: { radius } }] = useGameContext();
  return (
    <g>
      {
        zip(
          [...model.hints, ...model.structures],
          toPoints(model.hints.length + model.structures.length, radius * 0.5),
        ).map(([token, { x, y }]) => (<Token token={token} transform={`translate(${x}, ${y})`} />))
      }
    </g>
  );
}

Tokens.propTypes = {
  model: modelPropType.isRequired,
};

export default Tokens;
