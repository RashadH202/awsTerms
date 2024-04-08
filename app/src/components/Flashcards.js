import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function Flashcard({ term, correctAnswer, test, type }) {
  const [revealed, setRevealed] = useState(false);

  const handleCardClick = () => {
    setRevealed(!revealed);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }} onClick={handleCardClick}>
      <Card.Body>
        <Card.Title>{term}</Card.Title>
        {revealed && (
          <>
            <Card.Subtitle className="mb-2 text-muted">Type: {type}</Card.Subtitle>
            <Card.Text>{correctAnswer}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Test: {test}</Card.Subtitle>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default Flashcard;