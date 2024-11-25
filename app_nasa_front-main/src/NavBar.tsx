import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
          <ul>
            <li><Link to="/about-us" className="nav-link">About us</Link></li>
            <li><Link to="/content" className="nav-link">Content</Link></li>
            <li><Link to="/activities" className="nav-link">Activities</Link></li>
            <li><Link to="/room" className="nav-link">Room</Link></li>
          </ul>
        </nav>
  );
};

export default NavBar;
