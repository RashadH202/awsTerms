// Navbar.js
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

function NavBar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const handleShowSignUpModal = () => setShowSignUpModal(true);
  const handleCloseSignUpModal = () => setShowSignUpModal(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/">Terms</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/highscores">HighScores</Nav.Link>
          <NavDropdown title="How To Play" id="how-to-play-dropdown">
          <Nav.Link as={Link} to="/rules" style={{ color: 'black' }}>Rules</Nav.Link>
          <Nav.Link as={Link} to="/about" style={{ color: 'black' }}>About</Nav.Link>
            {/* Add other dropdown items for How To Play */}
          </NavDropdown>
          
          {/* Add other links here */}
        </Nav>
        <Nav>
        <NavDropdown title="Account" id="basic-nav-dropdown" style={{ display: 'grid' }}>
  <Nav.Link as={Link} to="/register" style={{ color: 'black' }}>Register</Nav.Link>
  <NavDropdown.Item onClick={handleShowLoginModal} style={{ color: 'black', display: 'block' }}>Login</NavDropdown.Item>
  <NavDropdown.Item onClick={handleShowSignUpModal} style={{ color: 'black', display: 'block' }}>Sign Up</NavDropdown.Item>
</NavDropdown>


        </Nav>
      </Navbar.Collapse>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login onClose={handleCloseLoginModal} />
        </Modal.Body>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUpModal} onHide={handleCloseSignUpModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUp onClose={handleCloseSignUpModal} />
        </Modal.Body>
      </Modal>
      
    </Navbar>
  );
}

export default NavBar;
