import React, { useEffect, useState } from "react";
import Card from "./Card";

const OverlayMenu = (props) => {
  const [isActive, toggle] = useState(props.isActive);

  function handleCloseButton() {
    toggle((state) => !state);
  }

  // very fragile code, two separate isActive values, optimize this?
  useEffect(() => {
    toggle(props.isActive);
  }, [props.isActive])
  useEffect(() => {
    if (props.stateReport) {
      props.stateReport(isActive);
    }
  }, [isActive]);
  

  return (
    <div className={`overlay-menu ${isActive ? "active" : ""}`}>
      <Card title={props.title} className="double">
        {props.children}
        <button className="close" onClick={handleCloseButton}>×</button>
      </Card>
    </div>
  )
}

export default OverlayMenu;