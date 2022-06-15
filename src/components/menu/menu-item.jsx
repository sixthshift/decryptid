import PropTypes from 'prop-types';
import React from 'react';

function MenuItem({ children }) {
  return (
    <button type="button" className="flex justify-center items-center w-14 h-14 rounded-full border-4 border-primary">
      {children}
    </button>
  );
}

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MenuItem;
