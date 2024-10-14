import React from 'react';

import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from"react-router-dom"

import Home from './pages/Home';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Realisations" element={<Realisations />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;
