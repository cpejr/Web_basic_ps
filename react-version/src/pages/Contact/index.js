import React from 'react';

// import { Container } from './styles';

function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <form class="contact-form">
        <div class="input-fields">
          <input type="text" class="input" placeholder="Name" />
          <input type="text" class="input" placeholder="Email" />
          <input type="text" class="input" placeholder="Phone" />
          <input type="text" class="input" placeholder="Subject" />
        </div>
        <div class="msg">
          <textarea placeholder="Message"></textarea>
          <div class="btn">Send</div>
        </div>
      </form>
    </section>
  );
}

export default Contact;