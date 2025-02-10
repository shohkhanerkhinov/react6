import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Barcha postlar</Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">Yangi post qo'shish</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
