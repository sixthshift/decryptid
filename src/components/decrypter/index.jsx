import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useGameContext } from '../context';
import Info from '../icons/Info';
import { solve } from './solver';

function Decrypter() {
  const [{ game, game: { board, ruleset }, ui: { inversion } }, dispatch] = useGameContext();
  useEffect(() => {
    dispatch({
      type: 'solve',
      payload: solve(game),
    });
  }, [board]);

  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => { setVisible(!visible); };
  const tooltipText = "The dots represent each player's potential unique clue";

  return (
    <div className="flex flex-col gap-2.5 items-stretch text-xs text-primary">
      <div className={classNames(['p-4 text-center bg-tertiary rounded-lg', { invisible: !visible }])}>
        <span>{tooltipText}</span>
      </div>
      <div className="flex gap-4 p-4 bg-tertiary rounded-lg">
        <div>
          <button type="button" aria-label="tooltip" onClick={toggleVisibility}><Info /></button>
        </div>
        <div className="flex flex-wrap landscape:grow justify-center landscape:w-min bg-tertiary rounded-lg">
          {ruleset
            .filter((rule) => (rule.inverted ? inversion : true))
            .map((rule) => (
              <div className="flex justify-between px-1 space-x-1 w-56  whitespace-nowrap" key={rule.text}>
                <span>{rule.text}</span>
                <div className="flex gap-1 items-center">
                  {Object.entries(rule.solution).map(([player, satisifies]) => {
                    const status = satisifies ? `bg-${player}` : 'bg-transparent';
                    return (
                      <span key={player} className={`inline-block w-2 h-2 rounded-full ${status}`} />
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
