import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useGameContext } from '../context';
import Info from '../icons/Info';
import { solve } from './solver';

function Decrypter() {
  const [
    {
      game,
      game: { ruleset },
      ui: { inversion },
    },
    dispatch,
  ] = useGameContext();
  useEffect(() => {
    dispatch({
      type: 'solve',
      payload: solve(game),
    });
  }, [game, dispatch]);

  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const tooltipText = "The dots represent each player's potential unique clue";

  return (
    <div className="flex flex-col items-stretch gap-2.5 text-primary text-xs">
      <div
        className={classNames(['rounded-lg bg-tertiary p-4 text-center', { invisible: !visible }])}
      >
        <span>{tooltipText}</span>
      </div>
      <div className="flex gap-4 rounded-lg bg-tertiary p-4">
        <div>
          <button type="button" aria-label="tooltip" onClick={toggleVisibility}>
            <Info />
          </button>
        </div>
        <div className="flex flex-wrap justify-center rounded-lg bg-tertiary landscape:w-min landscape:grow">
          {ruleset
            .filter((rule) => (rule.inverted ? inversion : true))
            .map((rule) => (
              <div
                className="flex w-56 justify-between space-x-1 whitespace-nowrap px-1"
                key={rule.text}
              >
                <span>{rule.text}</span>
                <div className="flex items-center gap-1">
                  {Object.entries(rule.solution).map(([player, satisifies]) => {
                    const status = satisifies ? `bg-${player}` : 'bg-transparent';
                    return (
                      <span
                        key={player}
                        className={`inline-block h-2 w-2 rounded-full ${status}`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Decrypter;
