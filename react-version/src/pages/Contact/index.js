import React, { useState } from 'react';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function clearForm() {
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Olá ${name}! Recebemos a sua mensagem sobre ${subject} e retornaremos através do e-mail ${email} ou do telefone ${phone}.
      Eis a mensagem, caro queira revisá-la:
      ${message}`
    );
    clearForm();
  }

  return (
    <section id="contact">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-fields">
          <input type="text" className="input" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
          <input type="text" className="input" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          <input type="text" className="input" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" />
          <input type="text" className="input" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" />
        </div>
        <div className="msg">
          <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          <button type="submit" className="btn">Send</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;