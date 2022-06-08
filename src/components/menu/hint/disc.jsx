import React from 'react';

import Icon from '../../icons/disc';

function Tile() {
  return (
    <div>
      <button type="button" className="flex justify-center items-center w-14 h-14 rounded-full border-4 border-primary">
        <Icon className="stroke-primary" />
      </button>
    </div>
  );
}

export default Tile;
