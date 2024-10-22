import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Contact from './page/Contact';
import Location from './page/Location';
import Features from './page/Features';
import Services from './page/Services';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/reviews" element={<Features />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}
