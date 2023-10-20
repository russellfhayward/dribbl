import React, { useState } from 'react';
import styled from 'styled-components';

const DisplayLetter = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;

function GuessingComponent({ word }: { word: string }) {
  const [guess, setGuess] = useState('');

  const isWordCorrect = () => word === guess;

  const isCharacterWrong = (idx: number) => 
    guess.length >= word.length && guess[idx] !== word[idx];

  const getCharacterColor = (idx: number) => {
    if (isWordCorrect()) return 'green';
    if (isCharacterWrong(idx)) return 'red';
    return 'black';
  };

  const renderLetters = () => 
    Array.from(word).map((char, idx) => (
      <DisplayLetter key={idx} color={getCharacterColor(idx)}>
        {guess[idx] || '_'}
      </DisplayLetter>
    ));

  const renderExtraLetters = () => 
    guess.length > word.length &&
    Array.from(guess.slice(word.length)).map((char, idx) => (
      <DisplayLetter key={idx + word.length} color="red">
        {char}
      </DisplayLetter>
    ));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Logic to send the guess to the chat box or any other functionality.
    }
  };

  return (
    <div>
      <div>
        {renderLetters()}
        {renderExtraLetters()}
      </div>
      <input
        value={guess}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
      />
    </div>
  );
}

export default GuessingComponent;
