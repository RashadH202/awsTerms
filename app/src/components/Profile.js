import React, { useState, useEffect } from 'react';
import SavedQuestions from './SavedQuestions'
import SavedTerms from './SavedTerms';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from DynamoDB or any API endpoint
    const fetchData = async () => {
      try {
        // Example fetch request
        const response = await fetch('https://example.com/api/user'); // Replace 'https://example.com/api/user' with your API endpoint
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); // Run only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error: Failed to fetch user data</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <p>Username: {userData.username}</p>
        <p>Full Name: {userData.fname} {userData.lname}</p>
        <p>Email: {userData.email}</p>
        <p>Skill Level: {userData.skilllevel}</p>
        <p>Studying For: {userData.studyingfor.join(', ')}</p>
        <p>Rank: {userData.rank}</p>
        <p>Created Questions: {userData.createdQuestions.length}</p>
        <p>Saved Flashcards: {userData.savedFlashcards.length}</p>
        <p>Saved Questions: {userData.savedQuestions.length}</p>
        <p>Test Scores:</p>
        <ul>
          {userData.testScores.map(score => (
            <li key={score.date}>
              <p>Test Name: {score.testName}</p>
              <p>Date: {score.date}</p>
              <p>Score: {score.score}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Render SavedQuestions component */}
      <SavedQuestions />

      {/* Render SavedTerms component */}
      <SavedTerms />
    </div>
  );
}

export default Profile;
