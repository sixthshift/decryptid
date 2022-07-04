import PropTypes from 'prop-types';
import React from 'react';

const WithMapEdit = (Component) => {
  function MapEdit({ model, children }) {
    return (
      <Component model={model}>
        {children}
        {model.anchor ? (
          <text className="select-none" textAnchor="middle" alignmentBaseline="central">
            {model.tile + 1}
          </text>
        ) : null}
      </Component>
    );
  }
  MapEdit.propTypes = {
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
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };
  MapEdit.defaultProps = {
    children: null,
  };
  return MapEdit;
};

export default WithMapEdit;
