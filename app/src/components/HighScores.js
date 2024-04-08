// components/HighScores.js
import React from 'react';
import { Table } from 'react-bootstrap';

function HighScores() {
  // Sample data for demonstration
  const highScores = [
    { username: 'user1', score: 100, date: '2024-04-01', rank: 1 },
    { username: 'user2', score: 90, date: '2024-04-02', rank: 2 },
    { username: 'user3', score: 80, date: '2024-04-03', rank: 3 },
    { username: 'user4', score: 70, date: '2024-04-04', rank: 4 },
    { username: 'user5', score: 60, date: '2024-04-05', rank: 5 }
  ];

  return (
    <div>
      <h3>High Scores</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {highScores.map((score, index) => (
            <tr key={index}>
              <td>{score.rank}</td>
              <td>{score.username}</td>
              <td>{score.score}</td>
              <td>{score.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default HighScores;
