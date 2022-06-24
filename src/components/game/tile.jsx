/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useUiContext } from '../context';
import { useGameContext } from './context';
import Hex from './hex';

class ViewModel {
  constructor(id, model, dispatch) {
    this.id = id;
    this.model = model;
    this.dispatch = dispatch;
    this.props = {};
    this.className = [];
  }

  toMapEdit() {
    this.className.push('cursor-move');
    this.props.onDoubleClick = () => {
      this.dispatch({ type: 'flip', payload: this.id });
    };
    return this;
  }

  render() {
    return (
      <g className={classNames(this.className)} {...this.props}>
        {this.model.map((hex) => (
          <Hex
            key={`${hex.coordinates.q}, ${hex.coordinates.r}, ${hex.coordinates.s}`}
            model={hex}
          />
        ))}
      </g>
    );
  }
}

function Tile({ id, tile }) {
  const [, dispatch] = useGameContext();
  const [{ mode }] = useUiContext();
  const viewModel = new ViewModel(id, tile, dispatch);
  if (mode === 'tile') {
    viewModel.toMapEdit();
  }
  return viewModel.render();
}

Tile.propTypes = {
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
};

export default Tile;
