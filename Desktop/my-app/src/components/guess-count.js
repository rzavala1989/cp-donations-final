import React from 'react';

import './guess-count.css';

export const GuessCount = ({ guessCount }) => {
  const isPlural = guessCount !== 1;
  const guessNoun = isPlural ? 'guesses' : 'guess';

  return (
    <h2 id='guessCount'>
      You've made <span id='count'>{guessCount}</span> {guessNoun}!
    </h2>
  );
};
