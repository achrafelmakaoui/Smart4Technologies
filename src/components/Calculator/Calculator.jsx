import React, { useEffect, useRef } from 'react';
import './Calculator.css'
import Sources from '../Images/Sources_1.png'
import Production from '../Images/Electrolysers_1.png'
import Storage from '../Images/Storage_1.png'
import Application from '../Images/Applications_1.png'
import AnimatedHeading from '../../AnimatedHeading';


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
          <div class="cardCalculator">
            <div class="cardCalculator-content">
              <div class="cardCalculator-image">
                <img src={Sources} alt='Sources'/>
              </div>
              <div class="cardCalculator-info-wrapper">
                <div class="cardCalculator-info">
                    <h3>Sources</h3>     
                </div>
              </div>
            </div>
            <div className='pro__items_Calculator'>
              <span>Read More
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </div>
          </div>
          <div class="cardCalculator">
            <div class="cardCalculator-content">
              <div class="cardCalculator-image">
                <img src={Production} alt='Production'/>
              </div>
              <div class="cardCalculator-info-wrapper">
                <div class="cardCalculator-info">
                    <h3>Production</h3>     
                </div>
              </div>
            </div>
            <div className='pro__items_Calculator'>
              <span>Read More
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </div>
          </div>
          <div class="cardCalculator">
            <div class="cardCalculator-content">
              <div class="cardCalculator-image">
                <img src={Storage} alt='Storage'/>
              </div>
              <div class="cardCalculator-info-wrapper">
                <div class="cardCalculator-info">
                    <h3>Storage</h3>     
                </div>
              </div>
            </div>
            <div className='pro__items_Calculator'>
              <span>Read More
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </div>
          </div>
          <div class="cardCalculator">
            <div class="cardCalculator-content">
              <div class="cardCalculator-image">
                <img src={Application} alt='Application'/>
              </div>
              <div class="cardCalculator-info-wrapper">
                <div class="cardCalculator-info">
                    <h3>Application</h3>     
                </div>
              </div>
            </div>
            <div className='pro__items_Calculator'>
              <span>Read More
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <span className='btnGetStarted'>Get Started <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span>
      </div>
    </section>
  )
}

export default Calculator