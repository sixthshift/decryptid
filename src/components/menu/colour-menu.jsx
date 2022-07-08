import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useGameContext } from '../context';
import Menu from './menu';

function ColourMenu({ colours, id, menuItem }) {
  const [{ ui: { selected } }, dispatch] = useGameContext();

  const colourMenuItems = colours.map(([colour, count]) => {
    const onClick = () => {
      dispatch({ type: 'select', payload: { id, colour } });
    };
    return (
      <button
        className={classNames(
          'flex justify-center items-center w-8 h-8 rounded-full',
          `bg-${colour}`,
          // { 'animate-slide-left': selected },
          { invisible: !(id === selected.mode) },
          { 'opacity-30': selected.colour && !(selected.colour === colour) },
        )}
        key={colour}
        label={colour}
        onClick={onClick}
        type="button"
      >
        <span className="select-none">{count}</span>
      </button>
    );
  });
  return (
    <Menu>
      {menuItem}
      <Menu>
        {colourMenuItems}
      </Menu>
    </Menu>
  );
}

ColourMenu.propTypes = {
  colours: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    ),
  ).isRequired,
  id: PropTypes.string.isRequired,
  menuItem: PropTypes.element.isRequired,
};

export default ColourMenu;
