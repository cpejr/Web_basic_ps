import React from 'react';

// import { Container } from './styles';

function Orig() {
  return (
    <div class="container">
      <nav class="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home">
        <h1>Welcome To My Site</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, facilis corporis quibusdam nihil sint placeat.</p>
      </section>

      <section id="about">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, facilis corporis quibusdam nihil sint placeat.</p>
      </section>

      <section id="service">
        <h1>Service</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, facilis corporis quibusdam nihil sint placeat.</p>
        </section>

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
    </div>
  );
}

export default Orig;