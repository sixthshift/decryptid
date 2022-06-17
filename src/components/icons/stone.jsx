import React from 'react';

function Stone() {
  return (
    <svg width="24" height="24" viewBox="0 0 6.35 6.35" stroke="currentColor">
      <g
        fillOpacity="0"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeOpacity="1"
        strokeWidth="0.5"
      >
        <path d="M 4.233 0.265 l 1.323 0.793 v 0.794 l -1.323 0.794 h -2.116 l -1.323 -0.794 v -0.794 l 1.323 -0.793 z" />
        <path d="M 2.117 2.646 l -1.323 -0.794 v 3.44 l 1.323 0.794 v -3.44 z" />
        <path d="M 4.233 2.646 h -2.116 v 3.44 h 2.116 v -3.44 z" />
        <path d="M 5.556 1.852 l -1.323 0.793 v 3.44 l 1.323 -0.793 v -3.44 z" />
      </g>
    </svg>
  );
}

export default Stone;
