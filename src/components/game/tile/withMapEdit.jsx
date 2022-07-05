/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import { inRange } from 'lodash';
import PropTypes from 'prop-types';
import React, { useCallback, useRef, useState } from 'react';
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
  const drag = useRef({
    active: false,
    initial: { x: undefined, y: undefined },
    delta: { x: 0, y: 0 },
  });

  const pointerCoordinates = (e) => (
    e.changedTouches
      ? { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY }
      : { x: e.pageX, y: e.pageY }
  );

  const onDown = useCallback((e) => {
    drag.current = { ...drag.current, active: true, initial: pointerCoordinates(e) };
    // Move the target to the end of the svg so that it sits on top of all other elements
    e.currentTarget.parentElement.append(e.currentTarget);
    onPointerDown?.(e);
  });
  const onMove = useCallback((e) => {
    if (drag.current.active) {
      const { a: scaleX, d: scaleY } = e.currentTarget.closest('svg').getScreenCTM();
      const { x, y } = pointerCoordinates(e);
      drag.current = {
        ...drag.current,
        delta: {
          x: (x - drag.current.initial.x) / scaleX,
          y: (y - drag.current.initial.y) / scaleY,
        },
      };
      e.currentTarget.setAttribute('transform', `translate(${drag.current.delta.x},${drag.current.delta.y})`);
      onPointerMove?.(e);
    }
  });

  const onUp = useCallback((e) => {
    if (drag.current.active) {
      e.preventDefault();
      drag.current = {
        ...drag.current,
        active: false,
        initial: { x: undefined, y: undefined },
        delta: { x: 0, y: 0 },
      };
      e.currentTarget.setAttribute('transform', `translate(${drag.current.delta.x},${drag.current.delta.y})`);
      if (dropZones) {
        const dropped = dropZones(e)
          .filter((dropZone) => (e.currentTarget !== dropZone))
          .find((dropZone) => {
            const {
              top, bottom, left, right,
            } = dropZone.getBoundingClientRect();
            const { x, y } = pointerCoordinates(e);
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
    onMouseDown: onDown,
    onMouseMove: onMove,
    onMouseUp: onUp,
    onMouseLeave: onUp,
    onTouchStart: onDown,
    onTouchMove: onMove,
    onTouchEnd: onUp,
    onTouchCancel: onUp,
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
        className={classNames(className, 'cursor-move touch-none')}
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
