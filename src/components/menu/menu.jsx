import PropTypes from 'prop-types';
import React from 'react';

function Menu({ children }) {
  return (
    <div className="gap-4 auto-rotate-invert ">
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
