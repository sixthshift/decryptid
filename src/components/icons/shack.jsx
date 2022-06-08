import { string } from 'prop-types';
import React from 'react';

function Shack({ className }) {
  return (
    <svg width="24" height="24" viewBox="0 0 6.35 6.35" className={className} stroke="currentColor">
      <g
        fillOpacity="0"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeOpacity="1"
        strokeWidth="0.5"
      >
        <path strokeLinejoin="round" d="M.265 2.91l2.91 2.91V3.705L.265.794z" />
        <path
          strokeLinejoin="round"
          d=" M 6.085 2.91 L 3.175 5.82 V 3.705 L 6.085 0.794 z"
        />
        <path
          strokeLinejoin="miter"
          d="M 0.265 0.794 H 6.085 L 3.175 3.704 L 0.265 0.794 z"
        />
      </g>
    </svg>
  );
}

Shack.propTypes = {
  className: string,
};

Shack.defaultProps = {
  className: 'stroke-secondary',
};

export default Shack;
