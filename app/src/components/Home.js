// components/Home.js
import React, { useEffect, useState } from 'react';
import HighScores from './HighScores';

function Home() {
  const [question, setQuestion] = useState(null);
  const [flashcard, setFlashcard] = useState(null);
  const [highestScores, setHighestScores] = useState([]);

  useEffect(() => {
    // Fetch one random question from DynamoDB
    fetch('YOUR_DYNAMODB_ENDPOINT/questions/random')
      .then(response => response.json())
      .then(data => setQuestion(data));

    // Fetch one random flashcard from DynamoDB
    fetch('YOUR_DYNAMODB_ENDPOINT/flashcards/random')
      .then(response => response.json())
      .then(data => setFlashcard(data));

    // Fetch highest test scores
    fetch('YOUR_API_ENDPOINT/highest-scores')
      .then(response => response.json())
      .then(data => setHighestScores(data));
  }, []);

  return (
    <div>
      <h2>Welcome to the Terms App</h2>
      {/* Display high scores */}
      <HighScores />

      {/* Display highest test scores */}
      <div>
        <h3>Highest Test Scores:</h3>
        <ul>
          {highestScores.map((score, index) => (
            <li key={index}>{score.username}: {score.score}</li>
          ))}
        </ul>
      </div>
      
      {/* Display random question */}
      {question && (
        <div>
          <h3>Random Question:</h3>
          <p>{question.text}</p>
        </div>
      )}

      {/* Display random flashcard */}
      {flashcard && (
        <div>
          <h3>Random Flashcard:</h3>
          <p>{flashcard.question}</p>
          <p>{flashcard.answer}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
