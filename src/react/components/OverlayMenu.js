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
      <Card />
    </div>
  )
}

export default OverlayMenu;