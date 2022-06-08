import React from 'react';

import Icon from '../../icons/stone';

function Tile() {
  return (
    <div>
      <button type="button" className="h-14 w-14 flex justify-center items-center border-4 border-primary rounded-full">
        <Icon className="stroke-primary" />
      </button>
    </div>
  );
}

export default Tile;
