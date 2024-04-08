import React from 'react';
import { Button } from 'react-bootstrap';

function SignOut({ onSignOut }) {
  const handleSignOut = () => {
    // Perform sign out logic here (e.g., clearing session, removing tokens, etc.)
    // Call the onSignOut callback to notify the parent component
    onSignOut();
  };

  return (
    <div>
      <Button variant="danger" onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
}

export default SignOut;
