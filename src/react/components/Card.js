import React from "react";

import { useState } from "react";

const Card = (props) => {


  return (
    <section className={`card${props.className ? ` ${props.className}` : ""}`}>
      <div className="title-bar">
        <h2>{props.title}</h2>

      </div>
      {props.children}
    </section>
  )
}

Card.defaultProps = {
  title: "No title",
  children: <>
    <p>Add content here.</p>
    <button onClick={() => alert("Button function.")}>Button example</button>
  </>,
  collapse: false
}

export default Card;

// {
// props.collapse
// ? <button className="close" onClick={handleCollapse}>{isCollapsed ? "+" : "-"}</button>
// : <></>
// }