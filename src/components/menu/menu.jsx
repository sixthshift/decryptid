import PropTypes from 'prop-types';
import React from 'react';

function Menu({ children }) {
  return (
    <div className="flex-wrap gap-4 justify-evenly auto-rotate-invert">
      { children }
    </div>
  );
}

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Menu.defaultProps = {
  children: undefined,
};

export default Menu;
