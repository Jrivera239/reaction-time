import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {

 
const [currentPage, setCurrentPage] = useState('About')

const selectedPage = () => {
    if (currentPage === 'Contact') {
    return <Contact />
  } 
    if (currentPage === 'Portfolio') {
    return <Project />
  }
    if (currentPage === 'About') {
    return <About />
  }
}

const pageChange = (page) => setCurrentPage(page);

  return (
  <>
  <header>

  <Header 
  currentPage={currentPage} 
  pageChange={pageChange}
  />

  </header>

  <main>

    {selectedPage()}

  </main>
 
  <footer>

  <Footer />

  </footer>
  </>
  );
}

export default App;
