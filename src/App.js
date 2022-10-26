import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Project from './components/Project';

function App() {

  return (
    <div>
      <Nav />
      <Header/>
      <main>
          <About />       
           <Project/>
      </main>
      <Footer />
    </div>
   
  );
}

export default App;
