import classNames from 'classnames';
import PropTypes from 'prop-types';

function MenuItem({ children, onClick = () => {}, selected = false }) {
  const classes = classNames(
    'flex h-14 w-14 items-center justify-center rounded-full border-4 border-primary',
    { 'text-primary': !selected, 'bg-secondary': !selected },
    { 'text-secondary': selected, 'bg-primary': selected },
  );
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

MenuItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default MenuItem;
