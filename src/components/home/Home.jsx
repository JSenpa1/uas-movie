import logo from './b3.jpg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Home.css';
import { Link } from 'react-router-dom';
import gif from './keqing.gif';
import gif2 from './kuru.gif';
import realLogo from '../calvin.png';
import logo2 from './b4.jpg';
import React from 'react';
import logo3 from './bg5.jpg';

export const Home = () => {
  return (
    <div>
    <Parallax pages={5}>
    <ParallaxLayer speed={0.5}>
    <div className='header'>
        <img src={realLogo} alt='realLogo'></img>
        <h1>GML</h1>
    </div>
    <section className="scroll s-one" data-section-name="s-one">
        <div className="box">
            <h2 data-jarallax-element="0 -200">Best Website for Movie Lists</h2>
            <div className="container">
                <div className="imgBx jarallax">
                    <img src={logo} className="jarallax-img" alt='parImg'/>
                </div>
                <div className="content" data-jarallax-element="-150 0">
                    <p>Comes With A lot of Unique Features</p>
                </div>
            </div>
        </div>
    </section>
    </ParallaxLayer>

    <ParallaxLayer speed={0.4} factor={3} sticky={{ start: 0.8, end: 3.5 }}>
      <img src={gif} alt='gif' className='gif'/>
      <img src={gif2} alt='gif2' className='gif2' />
    </ParallaxLayer>

    <ParallaxLayer offset={2} speed={0.4} factor={3}>
    <section className="scroll s-two" data-section-name="s-two">
        <div className="box">
            <h2 data-jarallax-element="0 200">Simple to Use UI</h2>
            <div className="container">
                <div className="imgBx jarallax">
                    <img src={logo2} className="jarallax-img" alt='parImg'/>
                </div>
                <div className="content" data-jarallax-element="-200 0">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias similique delectus neque expedita harum id numquam repudiandae, ducimus eligendi a rem maiores non suscipit aliquid dolores? Saepe, aliquid ratione.</p>
                </div>
            </div>
        </div>
    </section>
    </ParallaxLayer>

    <ParallaxLayer offset={3} speed={0.3}>
    <section className="scroll s-three" data-section-name="s-three">
        <div className="box">
            <h2 data-jarallax-element="0 -200">Start Now!!</h2>
            <div className="container">
                <div className="imgBx jarallax">
                    <img src={logo3} className="jarallax-img" alt='parImg'/>
                </div>
                <div className="content" data-jarallax-element="-50 0">
                    <p>No This Website Does not give you free primogems</p>
                </div>
            </div>
        </div>
    </section>
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
