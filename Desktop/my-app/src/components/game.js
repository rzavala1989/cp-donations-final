import React, { useState } from 'react';

import { Header } from './header';
import { GuessSection } from './guess-section';
import { StatusSection } from './status-section';
import { InfoSection } from './info-section';

export const Game = () => {
  const [guesses, setGuesses] = useState([]);
  const [feedback, setFeedback] = useState('Make your guess!');
  const [correctAnswer, setCorrectAnswer] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const restartGame = () => {
    setGuesses([]);
    setFeedback('Make your guess!');
    setCorrectAnswer(Math.floor(Math.random() * 100) + 1);
  };

  const makeGuess = (guess) => {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      setFeedback('Please enter a valid number');
      return;
    }

    const difference = Math.abs(guess - correctAnswer);
    let localFeedback;
    if (difference >= 50) {
      localFeedback = "You're Ice Cold...";
    } else if (difference >= 30) {
      localFeedback = "You're Cold...";
    } else if (difference >= 10) {
      localFeedback = "You're Warm.";
    } else if (difference >= 1) {
      localFeedback = "You're Hot!";
    } else {
      localFeedback = 'You got it!';
    }

    setGuesses([...guesses, guess]);
    setFeedback(localFeedback);

    // We typically wouldn't touch the DOM directly like this in React
    // but this is the best way to update the title of the page,
    // which is good for giving screen-reader users
    // instant information about the app.
    document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  };

  const guessCount = guesses.length;

  return (
    <div>
      <Header onRestartGame={() => restartGame()} />
      <main role='main'>
        <GuessSection
          feedback={feedback}
          guessCount={guessCount}
          onMakeGuess={makeGuess}
        />
        <StatusSection guesses={guesses} />
        <InfoSection />
      </main>
    </div>
  );
};
