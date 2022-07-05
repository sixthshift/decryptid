import React from 'react';
import { childrenPropType, modelPropType } from '../prop-types';

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
    model: modelPropType.isRequired,
    children: childrenPropType,
  };
  MapEdit.defaultProps = {
    children: null,
  };
  return MapEdit;
};

export default WithMapEdit;
