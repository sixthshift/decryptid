import Board from './board';
import Player from './player';
import Structure from './structure';

class Cryptid {
  constructor({ board, players, structures }) {
    this.board = new Board(board);
    this.players = players.map((player) => new Player(player));
    this.structures = structures.map((structure) => new Structure(structure));
  }
}

export default Cryptid;
