import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <main>
      <Card title="Contact form under development.">
        <p>Instead of waiting, you can send me an email by clicking the button below.</p>
        <a href="mailto:hello@erengazioglu.com?subject=Let\'s get in touch" target="_blank"><button>Send me an email</button></a>
      </Card>
      <Link to="/"><button>&lt; Go back to the homepage</button></Link>
    </main>
  )
}

export default Contact;