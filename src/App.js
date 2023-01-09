import React, { useEffect, useRef, useState } from 'react';
import ScrollButton from './components/ScrollButton';
import { FaCaretDown } from 'react-icons/fa';
import Hamburger from 'hamburger-react';
import Landing from './components/Landing';
import Bio from './components/Bio';
import August from './components/August';
import Letters from './components/Letters';
import Ballad from './components/Ballad';
import Branded from './components/Branded';
import Realm from './components/Realm';
import Installation from './components/Installation';
import Contact from './components/Contact';

function App() {
  const bio = useRef();
  const productionA = useRef();
  const productionB = useRef();
  const productionC = useRef();
  const productionD = useRef();
  const productionE = useRef();
  const installation = useRef();
  const contact = useRef();
  const productionsMenuRef = useRef();
  const navRef = useRef();

  const [productionsMenuOpen, setProductionsMenuOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const handleToggleProductionsMenu = () => {
    setProductionsMenuOpen(!productionsMenuOpen);
  }
  
  useEffect(() => {
    let handler = (e) => {
      if (!productionsMenuRef.current.contains(e.target)) {
        setProductionsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    }
  });

  const handleSectionScroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
    setProductionsMenuOpen(false);
    document.body.classList.remove('nav-links-mobile');
    setHamburgerOpen(false);
  }

  const handleClickMobile = () => {
    document.body.classList.toggle('nav-links-mobile');
  }

  const handleMobileMenuToggle = (e) => {
    if (e.target.id !== 'nav-links') {
      document.body.classList.remove('nav-links-mobile')
    }
    setHamburgerOpen(false);
  }
  const toggleNavBackground = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setNavBackground(true)
    } else {
      setNavBackground(false)
    }
  };

  window.addEventListener('scroll', toggleNavBackground);

  return (
    <>
      <header>
        <h1>Caio Ribeiro, Writer and Director</h1>
        <div className='navbar'
          style={{backgroundColor: navBackground ? '#010101cc' : '#010101cc'}} >
          <nav>
            <ul ref={navRef} id='nav-links' className='nav-links'>
              <li onClick={() => handleSectionScroll(bio)} className='link'>
                <a href='#aboutMe'>
                  About Me
                </a>
              </li>
              <div ref={productionsMenuRef} className='drop-down-container'>
                <button 
                  onClick={handleToggleProductionsMenu} 
                  className='productions-nav'>
                  <a href='#productions'>
                    Productions<FaCaretDown className='caret-down-icon' />
                  </a>
                </button>
                <ul className={`productions-menu ${productionsMenuOpen ? 'open' : 'closed'}`}>
                  <li onClick={() => handleSectionScroll(productionA)} className='productions-link'>
                  <a href='#august'>
                    Sometime in August
                  </a>
                  </li>
                  <li onClick={() => handleSectionScroll(productionB)} className='productions-link'>
                    <a href='#letters'>
                      Last Letters from Monte Rosa
                    </a>
                  </li>
                  <li onClick={() => handleSectionScroll(productionC)} className='productions-link'>
                    <a href='#ballad'>
                      Ballad for Two Lovers
                    </a>
                  </li>
                  <li onClick={() => handleSectionScroll(productionD)} className='productions-link'>
                    <a href='#ballad'>
                      Branded by Fire
                    </a>
                  </li>
                  <li onClick={() => handleSectionScroll(productionE)} className='productions-link'>
                    <a href='#ballad'>
                      The Realm
                    </a>
                  </li>
                </ul>
              </div>
              <li onClick={() => handleSectionScroll(installation)} className='link'>
                <a href='#installation'>
                  Installation
                </a>
              </li>
              {/* <li onClick={() => handleSectionScroll(contact)} className='link'>
                <a href='#contact'>
                  Contact
                </a>
              </li> */}
            </ul>
            <button onClick={handleClickMobile} className='mobile-menu-btn'>
              <Hamburger 
                toggled={hamburgerOpen} 
                toggle={setHamburgerOpen} 
                color= 'white'
                size={45}
                label='Show menu'
                // https://hamburger-react.netlify.app/
                />
            </button>
          </nav>
        </div>
      </header>
      <body onClick={handleMobileMenuToggle}>
        <div className='landing-section' >
          <Landing />
        </div>
        <div ref={bio} className='bio-section'>
          <Bio />
        </div>
        <div ref={productionA} className='august-section'>
          <August />
        </div>
        <div ref={productionB} className='letters-section'>
          <Letters />
        </div>
        <div ref={productionC} className='ballad-section'>
          <Ballad />
        </div>
        <div ref={productionD} className='branded-section'>
          <Branded />
        </div>
        <div ref={productionE} className='realm-section'>
          <Realm />
        </div>
        <div ref={installation} className='installation-section'>
          <Installation />
        </div>
        {/* <div ref={contact}>
          <Contact />
        </div> */}
      </body>
      <ScrollButton />
      <footer>

      </footer>
    </>
  );
}

export default App;