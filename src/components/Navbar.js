import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/customers">Customers</Link></li>
      <li><Link to="/reservations">Reservations</Link></li>
      <li><Link to="/rooms">Rooms</Link></li>
      <li><Link to="/billpage">Bills</Link></li>
    </ul>
  </nav>
);

export default Navbar;
