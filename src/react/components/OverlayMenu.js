import React, { useState } from "react";
import Card from "./Card";

const OverlayMenu = () => {
  const [isActive, toggle] = useState(true);

  function handleCloseButton() {
    toggle((state) => !state);
  }

  return (
    <div className={`overlay-menu ${isActive ? "active" : ""}`}>
      <Card title="Website under construction." className="double">
        <p>Next scheduled update: 12 Nov. 2023</p>
        <button onClick={() => window.location.href = "mailto:hello@erengazioglu.com"}>Send me an email</button>
        <button className="close" onClick={handleCloseButton}>×</button>
      </Card>
    </div>
  )
}

export default OverlayMenu;