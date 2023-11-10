import React, { useState, useEffect } from "react";
import Card from "./Card";

const OverlayMenu = () => {
  const [isActive, toggle] = useState(false);

  useEffect(() => {
    window.addEventListener("keypress", () => toggle(state => !state))
  }, [])

  return (
    <div className={`overlay-menu ${isActive ? "active" : ""}`}>
      <Card />
    </div>
  )
}

export default OverlayMenu;