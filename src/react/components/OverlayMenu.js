import React, { useState, useEffect } from "react";
import Card from "./Card";

const OverlayMenu = () => {
  const [isActive, toggle] = useState(true);

  useEffect(() => {
    const handleKeyPress = () => {
      toggle((state) => !state);
    };
  
    window.addEventListener("keypress", handleKeyPress);
  
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div className={`overlay-menu ${isActive ? "active" : ""}`}>
      <Card title="Website under construction.">
      <p>Next scheduled update: 12 Nov. 2023</p>
      <button onClick={() => window.location.href = "mailto:hello@erengazioglu.com"}>Send me an email</button>
      </Card>
    </div>
  )
}

export default OverlayMenu;