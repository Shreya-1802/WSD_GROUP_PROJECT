import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './NavigationBar.css'; // Import the CSS file

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/meme">Meme</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
