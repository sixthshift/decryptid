import { useGameContext } from '../../context';
import { childrenPropType, modelPropType } from '../prop-types';
import Hex from './hex';
import WithDecryption from './withDecryption';
import WithDimming from './withDimming';
import WithMapEdit from './withMapEdit';
import WithPlacement from './withPlacement';

// Once the surviving candidates are this few, add an explicit ring on top of
// the dimming so the answer "pops" in the endgame.
const ENDGAME_THRESHOLD = 6;

function Index({ model, children }) {
  let Component = Hex;
  const [
    {
      ui: { selected },
      game: { board },
    },
  ] = useGameContext();

  const candidateCount = board.filter((hex) => hex.isCandidate).length;
  const decrypting = candidateCount > 0;
  const endgame = decrypting && candidateCount <= ENDGAME_THRESHOLD;

  if (selected.mode === 'tile') {
    Component = WithMapEdit(Component);
  }
  if (['cube', 'disc', 'shack', 'stone'].includes(selected.mode) && selected.colour) {
    Component = WithPlacement(Component);
  }
  // Subtractive emphasis: recede eliminated hexes; only mark candidates
  // explicitly once few remain.
  if (decrypting && !model.isCandidate) {
    Component = WithDimming(Component);
  }
  if (endgame && model.isCandidate) {
    Component = WithDecryption(Component);
  }
  return <Component model={model}>{children}</Component>;
}

Index.propTypes = {
  model: modelPropType.isRequired,
  children: childrenPropType,
};

Index.defaultProps = {
  children: null,
};

export default Index;
