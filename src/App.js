import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import Safaris from './pages/Safaris';
import Wildlife from './pages/Wildlife';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/safaris" element={<Safaris />} />
        <Route path="/wildlife" element={<Wildlife />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;