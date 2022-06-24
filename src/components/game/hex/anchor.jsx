import PropTypes from 'prop-types';
import React from 'react';

function Anchor({ model }) {
  return (
    <text className="select-none" textAnchor="middle" alignmentBaseline="central">
      {model.tile + 1}
    </text>
  );
}

Anchor.propTypes = {
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
  }).isRequired,
};

export default Anchor;
