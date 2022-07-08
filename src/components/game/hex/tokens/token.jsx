/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import { useGameContext } from '../../../context';
import { toPoints } from '../utils';

function Token({ token, ...props }) {
  const [{ ui: { radius } }] = useGameContext();
  let sides;
  if (token.type === 'cube') {
    sides = 4;
  } else if (token.type === 'disc') {
    sides = 100;
  } else if (token.type === 'shack') {
    sides = 3;
  } else if (token.type === 'stone') {
    sides = 8;
  }
  return (
    <polygon
      key={`${token.type} ${token.colour}`}
      className={`fill-${token.colour}`}
      points={toPoints(sides, radius * 0.15).map(({ x, y }) => (`${x}, ${y}`)).join(' ')}
      {...props}
    />
  );
}

Token.propTypes = {
  token: PropTypes.shape({
    type: PropTypes.string,
    colour: PropTypes.string,
  }).isRequired,
};

export default Token;
