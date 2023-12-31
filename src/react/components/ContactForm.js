import React from "react";

const ContactForm = (props) => {
  return <>
    <form name="contact" id="contact" method="post" className="card" netlify netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      
      <legend>Contact form</legend>
      <ul>
        <li>
          <label htmlFor="name" >Name:</label>
          <input required type="text" id="name" name="name" placeholder=""/>
        </li>
        <li>
          <label htmlFor="address" >E-mail:</label>
          <input required type="email" id="email" name="email" placeholder=""/>
        </li>
        <li className="col">
          <label htmlFor="message" >Your message:</label>
          <div className="textarea-container">
            <div></div>
            <textarea required name="message" id="message" autoCorrect="off" autoComplete="off" spellCheck="false"></textarea>
          </div>
          <p className="form-note">Resize the container using this handle ↑</p>
        </li>
      </ul>
    </form>
    <button type="submit" form="contact">Send e-mail</button>
  </>
}

export default ContactForm;