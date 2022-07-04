/* eslint-disable no-multi-assign */
/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useUiContext } from '../../context';
import Hex from '../hex';
import WithMapEdit from './withMapEdit';

function Tile({
  id, tile, className, ...props
}) {
  return (
    <g className={classNames(className, 'tile')} id={id} {...props}>
      {tile.map((hex) => (
        <Hex
          key={`${hex.coordinates.q}, ${hex.coordinates.r}, ${hex.coordinates.s}`}
          model={hex}
        />
      ))}
    </g>
  );
}

function Index({ tile, className, ...props }) {
  let Component = Tile;
  const [{ mode }] = useUiContext();
  if (mode === 'tile') {
    Component = WithMapEdit(Component);
  }
  return <Component tile={tile} className={className} {...props} />;
}

export default Index;

Index.propTypes = Tile.propTypes = {
  id: PropTypes.number.isRequired,
  tile: PropTypes.arrayOf(
    PropTypes.shape({
      anchor: PropTypes.bool,
      tile: PropTypes.number,
      coordinates: PropTypes.shape({
        q: PropTypes.number,
        r: PropTypes.number,
        s: PropTypes.number,
      }),
      terrain: PropTypes.string,
      territory: PropTypes.string,
      hints: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
    ),
  ]),
};

Index.defaultProps = Tile.defaultProps = {
  className: '',

};
