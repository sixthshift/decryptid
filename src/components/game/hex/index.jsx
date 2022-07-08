/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-multi-assign */
import React from 'react';
import { useGameContext } from '../../context';
import { childrenPropType, modelPropType } from '../prop-types';
import Hex from './hex';
import WithMapEdit from './withMapEdit';
import WithPlacement from './withPlacement';

function Index({ model, children }) {
  let Component = Hex;
  const [{ ui: { selected } }] = useGameContext();
  if (selected.mode === 'tile') {
    Component = WithMapEdit(Component);
  }
  if (['cube', 'disc', 'shack', 'stone'].includes(selected.mode) && selected.colour) {
    Component = WithPlacement(Component);
  }
  return (
    <Component model={model}>
      {children}
    </Component>
  );
}

Index.propTypes = {
  model: modelPropType.isRequired,
  children: childrenPropType,
};

Index.defaultProps = {
  children: null,
};

export default Index;
