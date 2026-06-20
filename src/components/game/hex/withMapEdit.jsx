import { childrenPropType, modelPropType } from '../prop-types';

const WithMapEdit = (Component) => {
  function MapEdit({ model, children = null }) {
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
  return MapEdit;
};

export default WithMapEdit;
