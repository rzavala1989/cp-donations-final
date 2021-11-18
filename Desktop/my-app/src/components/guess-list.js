import React from 'react';

import './guess-list.css';

export const GuessList = (props) => {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));

  return (
    <ul id='guessList' className='guessBox clearfix'>
      {guesses}
    </ul>
  );
};
