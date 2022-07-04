/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import { inRange } from 'lodash';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { useGameContext } from '../context';

const useDoubleClick = (onDoubleClick) => {
  const [lastClick, setLastClick] = useState(Date.now());
  return () => {
    if (Date.now() - lastClick < 500) onDoubleClick(); // within 0.5 seconds
    setLastClick(Date.now());
  };
};

const useDragSVG = ({
  onPointerDown, onPointerMove, onPointerUp, dropZones, onDrop,
}) => {
  const [dragging, setDragging] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: undefined, y: undefined });
  const [deltaCoordinates, setDeltaCoordinates] = useState({ x: 0, y: 0 });

  const pointerDown = useCallback((e) => {
    e.preventDefault();
    setDragging(true);
    setCoordinates({ x: e.pageX, y: e.pageY });
    // Move the target to the end of the svg so that it sits on top of all other elements
    e.currentTarget.parentElement.append(e.currentTarget);
    onPointerDown?.(e);
  });
  const pointerMove = useCallback((e) => {
    e.preventDefault();
    if (dragging) {
      const { a: scaleX, d: scaleY } = e.currentTarget.closest('svg').getScreenCTM();
      setDeltaCoordinates({
        x: (e.pageX - coordinates.x) / scaleX,
        y: (e.pageY - coordinates.y) / scaleY,
      });
      onPointerMove?.(e);
    }
  });

  const pointerUp = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    if (dragging) {
      setCoordinates({ x: undefined, y: undefined });
      setDeltaCoordinates({ x: 0, y: 0 });
      if (dropZones) {
        const dropped = dropZones(e)
          .filter((dropZone) => (e.currentTarget !== dropZone))
          .find((dropZone) => {
            const {
              top, bottom, left, right,
            } = dropZone.getBoundingClientRect();
            const { pageX: x, pageY: y } = e;
            return inRange(x, left, right) && inRange(y, top, bottom);
          });
        if (dropped) {
          onDrop(e, dropped);
        }
      }
      onPointerUp?.(e);
    }
  });

  return {
    onPointerDown: pointerDown,
    onPointerMove: pointerMove,
    onPointerUp: pointerUp,
    onPointerLeave: pointerUp,
    transform: `translate(${deltaCoordinates.x},${deltaCoordinates.y})`,
  };
};

const WithMapEdit = (Component) => {
  function MapEdit({
    id, tile, className, ...props
  }) {
    const [, dispatch] = useGameContext();
    const doubleClick = useDoubleClick(() => { dispatch({ type: 'flip', payload: id }); });
    const dragAndDrop = useDragSVG({
      onPointerUp: () => { doubleClick(); },
      dropZones: (e) => Array.from(e.currentTarget.closest('svg').querySelectorAll('.tile')),
      onDrop: (e, dropped) => {
        const tileA = e.currentTarget;
        const tileB = dropped;
        dispatch({ type: 'switch', payload: { idA: Number(tileA.id), idB: Number(tileB.id) } });
      },
    });

    return (
      <Component
        id={id}
        tile={tile}
        className={classNames(className, 'cursor-move')}
        {...dragAndDrop}
        {...props}
      />
    );
  }

  MapEdit.propTypes = {
    id: PropTypes.number.isRequired,
    tile: PropTypes.arrayOf(
      PropTypes.shape({
        anchor: PropTypes.bool,
        tile: PropTypes.number,
        coordinates: PropTypes.shape({
          q: PropTypes.number,
          r: PropTypes.number,
          s: PropTypes.number,
        }),
        terrain: PropTypes.string,
        territory: PropTypes.string,
        hints: PropTypes.arrayOf(PropTypes.string),
      }),
    ).isRequired,
    className: PropTypes.string,
  };
  MapEdit.defaultProps = {
    className: '',
  };

  return MapEdit;
};

export default WithMapEdit;
