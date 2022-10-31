import PropTypes from 'prop-types';

export const modelPropType = PropTypes.shape({
  anchor: PropTypes.bool,
  tile: PropTypes.number,
  coordinates: PropTypes.shape({
    q: PropTypes.number,
    r: PropTypes.number,
    s: PropTypes.number,
  }),
  terrain: PropTypes.string,
  territory: PropTypes.string,
  clues: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    colour: PropTypes.string,
  })),
});

export const childrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);

export const classNamesPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object,
  PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  ),
]);
