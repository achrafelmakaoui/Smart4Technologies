import React, { useEffect, useRef } from 'react';
import './Calculator.css'
import Sources from '../Images/Sources_1.png'
import Production from '../Images/Electrolysers_1.png'
import Storage from '../Images/Storage_1.png'
import Application from '../Images/Applications_1.png'
import AnimatedHeading from '../../AnimatedHeading';
import { Link } from 'react-router-dom';


const Calculator = () => {
  const cardsReff = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = cardsReff.current.getElementsByClassName("cardCalculator");
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const cardsElement = cardsReff.current;
    cardsElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      cardsElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className='Calculator-cards' id='Calculator'>
      <div className='calcul-content'>
        <h3 className='Calculator-cardsh3'>
          <AnimatedHeading text='Our Calculator'/>
        </h3>
        <h4 className='Calculator-cardsh4'>
          <AnimatedHeading text='Power Your Future with Our Tailored Hydrogen Solutions ⚡.'/>
        </h4>
        <div id="cardsCalculator" ref={cardsReff}>
          <div className="cardCalculator">
            <div className="cardCalculator-content">
              <div className="cardCalculator-image">
                <img src={Sources} alt='Sources'/>
              </div>
              <div className="cardCalculator-info-wrapper">
                <div className="cardCalculator-info">
                    <h3>Sources</h3>     
                </div>
              </div>
            </div>
            <div className='pro__items_Calculator'>
              <Link to="/sources">
                <span>Explore Now
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="cardCalculator">
            <div className="cardCalculator-content">
              <div className="cardCalculator-image">
                <img src={Production} alt='Production'/>
              </div>
              <div className="cardCalculator-info-wrapper">
                <div className="cardCalculator-info">
                    <h3>Production</h3>     
                </div>
              </div>
            </div>
            <div className='pro__items_Calculator'>
              <Link to="/production">
                <span>Explore Now
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="cardCalculator">
            <div className="cardCalculator-content">
              <div className="cardCalculator-image">
                <img src={Storage} alt='Storage'/>
              </div>
              <div className="cardCalculator-info-wrapper">
                <div className="cardCalculator-info">
                    <h3>Storage</h3>     
                </div>
              </div>
            </div>
            <div className='pro__items_Calculator'>
              <Link to="/storage">
                <span>Explore Now
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="cardCalculator">
            <div className="cardCalculator-content">
              <div className="cardCalculator-image">
                <img src={Application} alt='Application'/>
              </div>
              <div className="cardCalculator-info-wrapper">
                <div className="cardCalculator-info">
                    <h3>Application</h3>     
                </div>
              </div>
            </div>
            <div className='pro__items_Calculator'>
              <Link to="/application">
                <span>Explore Now
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Link to="/signin" className='btnGetStartedA'><span className='btnGetStarted'>Get Started <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span></Link>
      </div>
    </section>
  )
}

export default Calculator