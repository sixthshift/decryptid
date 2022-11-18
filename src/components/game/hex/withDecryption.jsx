import classNames from 'classnames';
import React from 'react';
import { useGameContext } from '../../context';
import { childrenPropType, modelPropType } from '../prop-types';
import { toPoints } from './utils';

function Candidate() {
  const [{ ui: { radius } }] = useGameContext();
  return (
    <polygon
      className={classNames(['fill-transparent', 'stroke-accent', 'stroke-2'])}
      points={toPoints(6, radius * 0.95).map(({ x, y }) => (`${x}, ${y}`)).join(' ')}
    />
  );
}

const WithDecryption = (Component) => {
  function Decryption({ model, children }) {
    return (
      <Component model={model}>
        {children}
        <Candidate />
      </Component>
    );
  }

  Decryption.propTypes = {
    model: modelPropType.isRequired,
    children: childrenPropType,
  };
  Decryption.defaultProps = {
    children: null,
  };
  return Decryption;
};

export default WithDecryption;
