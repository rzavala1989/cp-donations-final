import React from 'react';

import { GuessList } from './guess-list';
import { GuessCount } from './guess-count';

export const StatusSection = ({ guesses }) => {
  const guessCount = guesses.length;

  return (
    <section>
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
    </section>
  );
};
