import React, { useEffect } from 'react';
import { useGameContext } from '../context';
import { solve } from './solver';

function Decrypter() {
  const [{ game, game: { board, ruleset }, ui: { inversion } }, dispatch] = useGameContext();
  useEffect(() => {
    dispatch({
      type: 'solve',
      payload: solve(game),
    });
  }, [board]);

  return (
    <div className="flex flex-wrap landscape:grow justify-center landscape:w-min">
      {ruleset
        .filter((rule) => (rule.inverted ? inversion : true))
        .map((rule) => (
          <div className="flex justify-between px-1 space-x-1 w-56 text-xs whitespace-nowrap" key={rule.text}>
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
  );
}

export default Decrypter;
