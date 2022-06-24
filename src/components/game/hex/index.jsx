/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useUiContext } from '../../context';
import Anchor from './anchor';
import { hexToPixel, hexToPoints } from './utils';

class ViewModel {
  constructor(model) {
    this.model = model;
    this.props = {};
    this.polygon = {
      props: {},
      body: [],
    };
  }

  toMapEdit() {
    this.polygon.body.push(<Anchor key={this.model.anchor} model={this.model} />);
    return this;
  }

  toHex(radius, spacing) {
    const pixel = hexToPixel(radius, spacing, this.model.coordinates);
    this.props.transform = `translate(${pixel.x}, ${pixel.y})`;
    this.polygon.props.points = hexToPoints(radius).map(({ q, r }) => (`${q}, ${r}`)).join(' ');
    this.polygon.className = [`fill-${this.model.terrain}`, 'stroke-secondary', 'stroke-2'];
    return this;
  }

  render() {
    return (
      <g {...this.props}>
        <polygon className={classNames(this.polygon.className)} {...this.polygon.props} />
        {[...this.polygon.body]}
      </g>
    );
  }
}

function Hex({ model }) {
  const [{ mode, radius, spacing }] = useUiContext();

  const viewModel = new ViewModel(model).toHex(radius, spacing);
  if (mode === 'tile' && model.anchor) {
    viewModel.toMapEdit();
  }

  return viewModel.render();
}

Hex.propTypes = {
  model: PropTypes.shape({
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
};

export default Hex;
