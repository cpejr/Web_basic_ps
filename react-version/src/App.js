import React from 'react';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Contact />
    </div>
  );
}

export default App;
