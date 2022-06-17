import React from 'react';
import config from '../../config';
import Cryptid from '../../model/cryptid';
import Board from './board';

function Game() {
  const cryptid = new Cryptid(config);

  return (
    <div className="grow w-full h-full">
      <Board model={cryptid.board} />
    </div>
  );
}
export default Game;
