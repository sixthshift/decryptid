/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Model from '../../../model/hex';
import uiContext from '../../context';
import gameContext from '../context';
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

  toAnchor() {
    this.polygon.body.push(<Anchor key={this.model.anchor} model={this.model} />);
    return this;
  }

  toHex(radius, spacing) {
    const pixel = hexToPixel(radius, spacing, this.model.coordinates);
    this.props.transform = `translate(${pixel.x}, ${pixel.y})`;
    this.polygon.props.className = `fill-${this.model.terrain} stroke-secondary stroke-2`;
    this.polygon.props.points = hexToPoints(radius).map(({ q, r }) => (`${q}, ${r}`)).join(' ');
    return this;
  }

  render() {
    return (
      <g {...this.props}>
        <polygon {...this.polygon.props} />
        {[...this.polygon.body]}
      </g>
    );
  }
}

function Hex({ model }) {
  const { radius, spacing } = useContext(gameContext);
  const [state] = useContext(uiContext);

  const viewModel = new ViewModel(model).toHex(radius, spacing);
  if (state.mode === 'tile' && model.anchor) {
    viewModel.toAnchor();
  }

  return viewModel.render();
}

Hex.propTypes = {
  model: PropTypes.instanceOf(Model).isRequired,
};

export default Hex;
