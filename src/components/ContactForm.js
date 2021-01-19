import React, { useState } from "react";
import './ContactForm.css'
const ContactForm = () => {
  const [status, setStatus] = useState();

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <>
      <section id = 'contacts' className="s2">
        <div className="main-container">
          <h3 style={{ textAlign: "center" }}>Connect with me</h3>
          <form
            id="contact-form"
            onSubmit={submitForm}
            action="https://formspree.io/f/mvovdqae"
            method="POST"
          >
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="form-control">
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className="form-control">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type = 'submit' className = 'btn'>Send</button>
            {status === "SUCCESS" && (
              <p style = {{color: 'green'}}>Thanks! Your submission is received! I will contact you soon!</p>
            )}
            {status === "ERROR" && (
              <p style = {{color: 'red'}}>Ooops! There was an error.</p>
            )}
           
            
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
