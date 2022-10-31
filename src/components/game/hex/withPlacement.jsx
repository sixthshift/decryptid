/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import React from 'react';
import { useGameContext } from '../../context';
import { childrenPropType, classNamesPropType, modelPropType } from '../prop-types';

const isClue = (mode) => (mode === 'cube' || mode === 'disc');
const isStructure = (mode) => (mode === 'shack' || mode === 'stone');
const isTokenOnHex = (hex, mode, colour) => (hex.clues.some((clue) => (clue.type === mode && clue.colour === colour)) || hex.structures.some((structure) => (structure.type === mode && structure.colour === colour))
);
const canPlace = (availableTokens, hex, mode, colour) => (
  availableTokens.find((token) => (token.colour === colour))[mode] > 0
  && !isTokenOnHex(hex, mode, colour)
);
const canUnplace = isTokenOnHex;

const WithPlacement = (Component) => {
  function Placement({
    model, className, children, ...props
  }) {
    const [{ ui: { selected: { mode, colour } }, game }, dispatch] = useGameContext();
    const onClick = () => {
      // eslint-disable-next-line no-nested-ternary
      const tokens = isStructure(mode) ? game.structures
        : isClue(mode) ? game.players
          : undefined;
      // eslint-disable-next-line no-nested-ternary
      const actionType = (tokens && canPlace(tokens, model, mode, colour)) ? 'place'
        : canUnplace(model, mode, colour) ? 'unplace'
          : undefined;
      dispatch({ type: actionType, payload: { mode, colour, coordinates: model.coordinates } });
    };
    return (
      <Component
        model={model}
        onClick={onClick}
        className={classNames(className, 'cursor-pointer')}
        {...props}
      >
        {children}
      </Component>
    );
  }
  Placement.propTypes = {
    model: modelPropType.isRequired,
    className: classNamesPropType,
    children: childrenPropType,
  };
  Placement.defaultProps = {
    className: '',
    children: null,
  };
  return Placement;
};

export default WithPlacement;
