import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './calvin.png';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      if (currentScrollPos > prevScrollPos) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`bungkus bg-white fixed w-full text-black flex justify-between p-4 items-center mb-16 ${
        isScrolled ? 'scrolled' : '' // Add 'hidden' class when scrolled
      }`}
    >
      {/* <div className="text-2xl font-bold text-center">
        <h1><span className='uppercase text-4xl'>Logo</span></h1>
      </div> */}

      <img className='w-23 h-20' src={logo} alt='logo' />

      <nav>
        <ul className='md:flex gap-8 p-6 uppercase bg-white/10'>
          <li><Link to='/HomePage'>Home</Link></li>
          <li><Link to='/Popular'>Popular</Link></li>
          <li><Link to='/UpcomingPage'>Upcoming</Link></li>
          <li><Link to='/PlayingNowPage'>Playing Now</Link></li>
          <li><Link to='/TopRatedPage'>Top Rated</Link></li>
          <li><Link to='/AboutUsPage'>Contacts</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar