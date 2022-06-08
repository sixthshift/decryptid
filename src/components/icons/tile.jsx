import { string } from 'prop-types';
import React from 'react';

function Tile({ className }) {
  return (
    <svg width="24" height="24" viewBox="0 0 6.35 6.35" className={className} stroke="currentColor">
      <g
        fillOpacity="0"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeOpacity="1"
        strokeWidth="0.5"
      >
        <path d="M3.704 2.646L2.646 3.704l.387 1.446 1.446.387L5.537 4.48 5.15 3.033z" />
        <path d="M1.87.813L.814 1.87 1.2 3.317l1.446.387 1.058-1.058L3.317 1.2z" />
        <path d="M4.375.142L3.317 1.2l.387 1.446 1.446.387 1.058-1.058L5.821.529z" />
        <path d="M1.2 3.317L.142 4.375l.387 1.446 1.446.387L3.033 5.15l-.387-1.446z" />
      </g>
    </svg>
  );
}

Tile.propTypes = {
  className: string,
};

Tile.defaultProps = {
  className: 'stroke-secondary',
};

export default Tile;
