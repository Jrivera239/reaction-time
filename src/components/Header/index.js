import React from 'react';


function Header({currentPage, pageChange}) {
    return (
      <header className="bg-secondary mb-4 py-2 flex-row align-center">
          <div className="container flex-row justify-space-between-lg justify-center align-center">
        
              <h1>Joel Rivera</h1>
              
              <nav className='text-center'>
                <a href='#about' onClick={() => pageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >About Me</a>
                <a href='#portfolio' onClick={() => pageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >Portfolio</a>
                <a href='#contact' onClick={() => pageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact Me</a>
                <a href="joelrivera1989@yahoo.com" title="Email" rel="noopener"
                >Resume</a>
              </nav>
          </div>
      </header>
    );
  }
  
  export default Header;