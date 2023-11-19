import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom"
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <Link to="/"><button>&lt; Go back to the homepage</button></Link>
      <ContactForm />
    </main>
  )
}

export default Contact;