import React from "react";

const Card = (props) => {
  return (
    <section className={`card ${props.className}`}>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  )
}

Card.defaultProps = {
  title: "No title",
  children: <>
    <p>Add content here</p>
    <button onClick={() => alert("Button function.")}>Button example</button>
  </>
}

export default Card;