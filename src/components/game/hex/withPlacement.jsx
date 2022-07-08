/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import React from 'react';
import { useGameContext } from '../../context';
import { childrenPropType, classNamesPropType, modelPropType } from '../prop-types';

const WithPlacement = (Component) => {
  function Placement({
    model, className, children, ...props
  }) {
    const [{ ui: { selected: { mode, colour } }, game }, dispatch] = useGameContext();
    const onClick = () => {
      if (mode === 'shack' || mode === 'stone') {
        if (
          game.structures.find((structure) => (structure.colour === colour))[mode] > 0
          // eslint-disable-next-line max-len
          && !model.structures.some((structure) => (structure.type === mode && structure.colour === colour))
        ) {
          dispatch({ type: 'place', payload: { mode, colour, model } });
        // eslint-disable-next-line max-len
        } else if (model.structures.some((structure) => (structure.type === mode && structure.colour === colour))) {
          dispatch({ type: 'unplace', payload: { mode, colour, model } });
        }
      } else if (mode === 'cube' || mode === 'disc') {
        if (
          game.players.find((player) => (player.colour === colour))[mode] > 0
        && !model.hints.some((hint) => (hint.type === mode && hint.colour === colour))
        ) {
          dispatch({ type: 'place', payload: { mode, colour, model } });
        } else if (model.hints.some((hint) => (hint.type === mode && hint.colour === colour))) {
          dispatch({ type: 'unplace', payload: { mode, colour, model } });
        }
      }
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
