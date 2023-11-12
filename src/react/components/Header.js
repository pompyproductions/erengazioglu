import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">Eren Gazioglu</Link>
      <Card title="Website under construction.">
        <p>Next scheduled update: 12 Nov. 2023</p>
      </Card>
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