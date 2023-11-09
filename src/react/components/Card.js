import React from "react";

const Card = () => {
  return (
    <section className="card">
      <h2>Website under construction.</h2>
      <p>Next scheduled update: 12 Nov. 2023</p>
      <button onClick={() => window.location.href='mailto:info@erengazioglu.com'}>Send me an email</button>
    </section>
  )
}

export default Card;