import React from 'react';
import Orig from './Orig';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

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
