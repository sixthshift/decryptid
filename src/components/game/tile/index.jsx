/* eslint-disable no-multi-assign */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import { useGameContext } from '../../context';
import { classNamesPropType, modelPropType } from '../prop-types';
import Tile from './tile';
import WithMapEdit from './withMapEdit';

function Index({ tile, className, ...props }) {
  let Component = Tile;
  const [{ ui: { selected } }] = useGameContext();
  if (selected.mode === 'tile') {
    Component = WithMapEdit(Component);
  }
  return <Component tile={tile} className={className} {...props} />;
}

export default Index;

Index.propTypes = {
  id: PropTypes.number.isRequired,
  tile: PropTypes.arrayOf(modelPropType).isRequired,
  className: classNamesPropType,
};

Index.defaultProps = {
  className: '',
};
