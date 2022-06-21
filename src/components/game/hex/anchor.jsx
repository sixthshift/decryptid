import PropTypes from 'prop-types';
import React from 'react';
import Model from '../../../model/hex';

function Anchor({ model }) {
  return (
    <text className="select-none" textAnchor="middle" alignmentBaseline="central">
      {model.tile + 1}
    </text>
  );
}

Anchor.propTypes = {
  model: PropTypes.instanceOf(Model).isRequired,
};

export default Anchor;
