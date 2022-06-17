import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Menu from './menu';

function ColourMenu({ colours, menuItem, selected }) {
  return (
    <Menu>
      {menuItem}
      <Menu>
        {colours.map((colour) => {
          const classes = classNames(
            'flex justify-center items-center w-8 h-8 rounded-full',
            { [`bg-${colour}`]: true },
            // { 'animate-slide-left': selected },
            { invisible: !selected },
          );
          return (
            <button key={colour} type="button" className={classes} label={colour} />
          );
        })}
      </Menu>
    </Menu>
  );
}

ColourMenu.propTypes = {
  colours: PropTypes.arrayOf(PropTypes.string).isRequired,
  menuItem: PropTypes.element.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default ColourMenu;
