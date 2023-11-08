import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">Eren Gazioglu</Link>
      <nav>
        <ul>
          <li><Link>Menu</Link></li>
          <li><Link to="/page">Projects</Link></li>
          <li><Link to="/page">About</Link></li>
          <li><Link to="/page">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;