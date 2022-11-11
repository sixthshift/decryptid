import React, { useEffect } from 'react';
import { useGameContext } from '../context';

function Decrypter() {
  const [{ game, ui: { inversion } }, dispatch] = useGameContext();
  useEffect(() => {
    dispatch({ type: 'solve', payload: game });
  }, [game.board]);

  return (
    <div className="flex flex-wrap landscape:grow justify-center landscape:w-min">
      {game.ruleset
        .filter((rule) => (rule.inverted ? inversion : true))
        .map((rule) => (
          <div className="space-x-1 w-56 text-xs whitespace-nowrap" key={rule.text}>
            {Object.entries(rule.solution).map(([player, satisifies]) => {
              const status = satisifies ? `bg-${player}` : 'bg-transparent';
              return (
                <span key={player} className={`inline-block w-2 h-2 rounded-full ${status}`} />
              );
            })}
            <span>{rule.text}</span>
          </div>
        ))}
    </div>
  );
}

export default Decrypter;
