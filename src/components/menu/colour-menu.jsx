import PropTypes from 'prop-types';
import React from 'react';
import Menu from './menu';

function ColourMenu({ menuItem, colours }) {
  return (
    <Menu>
      {menuItem}
      <Menu>
        {colours.map((colour) => (
          <button key={colour} type="button" className={`flex justify-center items-center w-8 h-8 rounded-full bg-${colour}`} label={colour} />
        ))}
      </Menu>
    </Menu>
  );
}

ColourMenu.propTypes = {
  menuItem: PropTypes.element.isRequired,
  colours: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ColourMenu;
