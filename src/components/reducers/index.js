import game from './game';
import ui from './ui';

export default (state, action) => ({
  game: game(state?.game, action),
  ui: ui(state?.ui, action),
});
