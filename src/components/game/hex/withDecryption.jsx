import classNames from 'classnames';
import { useGameContext } from '../../context';
import { childrenPropType, modelPropType } from '../prop-types';
import { toPoints } from './utils';

function Candidate() {
  const [
    {
      ui: { radius },
    },
  ] = useGameContext();
  return (
    <polygon
      className={classNames([
        'pointer-events-none',
        'fill-transparent',
        'stroke-accent',
        'stroke-[4]',
      ])}
      points={toPoints(6, radius * 0.9)
        .map(({ x, y }) => `${x}, ${y}`)
        .join(' ')}
    />
  );
}

const WithDecryption = (Component) => {
  function Decryption({ model, children = null }) {
    return (
      <Component model={model}>
        {children}
        <Candidate />
      </Component>
    );
  }

  Decryption.propTypes = {
    model: modelPropType.isRequired,
    children: childrenPropType,
  };
  return Decryption;
};

export default WithDecryption;
