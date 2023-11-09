import React from "react";
import Card from "./Card";

const OverlayMenu = () => {
  return (
    <dialog className="overlay-menu" open>
      <Card />
    </dialog>
  )
}

export default OverlayMenu;