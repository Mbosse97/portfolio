import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { useState } from 'react';
import AboutMe from './components/Aboutme';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Resume from './components/Resume'


function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
        <Header handlePageChange={handlePageChange}/>
        {currentPage === 'AboutMe' && <AboutMe />}
        {currentPage === 'Portfolio' && <Portfolio />}
        {currentPage === 'Contact' && <Contact />}
        {currentPage === 'Resume' && <Resume />}
        <Footer />
    </div>
  );
}

export default App;
