// Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/">Terms</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/highscores">HighScores</Nav.Link>
          <NavDropdown title="How To Play" id="how-to-play-dropdown">
            <NavDropdown.Item as={Link} to="/howtoplay/Tutorials">Rules</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/howtoplay/About">Tutorial</NavDropdown.Item>
            {/* Add other dropdown items for How To Play */}
          </NavDropdown>
          
          {/* Add other links here */}
        </Nav>
        <Nav>
          <NavDropdown title="Login" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
            {/* Add other dropdown items here */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
