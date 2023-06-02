import logo from './content1.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Home.css';
import { Link } from 'react-router-dom';
import realLogo from '../Herta_logo.png';
import logo2 from './content2.png';
import React from 'react';
import logo3 from './content3.png';

export const Home = () => {
  return (
    <div>
    <Parallax pages={5}>
    <ParallaxLayer speed={0.5}>
    <div className='header'>
        <img src={realLogo} alt='realLogo'></img>
    </div>
    
        <div className="box">
            <div className="container">
                <div className="imgBx jarallax">
                    <img src={logo} className="jarallax-img" alt='parImg'/>
                    <img src={logo2} className="jarallax-img" alt='parImg'/>
                    <img src={logo3} className="jarallax-img" alt='parImg'/>
                </div>
            </div>
        </div>
    
    </ParallaxLayer>

    
    
    <ParallaxLayer offset={4} speed={0.2}>
    <section>
    <button className="learn-more">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text"><Link to='/Popular'>Continue</Link></span>
      </button>
    </section>
    </ParallaxLayer>

    </Parallax>
    </div>
  );
}
