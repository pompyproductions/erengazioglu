import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Header = (props) => {
  return (
    <header>
      <Link to="/" className="logo">Eren Gazioglu</Link>
      <Card title="Status">
        <p>Last update:<br/>01 Sep. 2024</p>
        <p>Next scheduled update:<br/>01 Oct. 2024</p>
      </Card>
      <nav>
        <ul>
          <li><Link onClick={props.callback}>Menu</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header;