import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function MenuItem({ children, onClick, selected }) {
  const classes = classNames(
    'flex justify-center items-center w-14 h-14 rounded-full border-4 border-primary',
    { 'text-primary': !selected, 'bg-secondary': !selected },
    { 'text-secondary': selected, 'bg-primary': selected },
  );
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

MenuItem.defaultProps = {
  selected: false,
};

MenuItem.defaultProps = {
  onClick: () => {},
};

export default MenuItem;
