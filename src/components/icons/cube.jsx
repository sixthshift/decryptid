import React from 'react';

function Cube() {
  return (
    <svg width="24" height="24" stroke="currentColor">
      <g
        fillOpacity="0"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeOpacity="1"
        strokeWidth="1.9"
      >
        <path d="M12 12l11-5.5L12 1 1 6.5 12 12" />
        <path d="M12 12v11L1 17.5v-11z" />
        <path d="M12 12l11-5.5v11L12 23v-9.9" />
      </g>
    </svg>
  );
}

export default Cube;
