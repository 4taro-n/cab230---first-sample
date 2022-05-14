import React from 'react';

import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/VolcanoListPage">Volcano List</Link>
            <Link to="/RegisterPage">Register</Link>
            <Link to="/LoginPage">Login</Link>
        </nav>
    </div>
  )
}

export default Navbar;