import PropTypes from 'prop-types';

function Menu({ children }) {
  return (
    <div className="menu auto-rotate flex-wrap items-center justify-center gap-2.5">{children}</div>
  );
}

Menu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Menu.defaultProps = {
  children: undefined,
};

export default Menu;
