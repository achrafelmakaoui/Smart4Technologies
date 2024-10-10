import React, { useEffect, useRef } from 'react';
import './Services.css'
import Laptop from '../Images/pc.png'
import Sol from '../Images/solution.png'
import Support from '../Images/phonee.png'
import Hydrogen from '../Images/Hydrogeen.png'
import AnimatedHeading from '../../AnimatedHeading';
import { Link } from 'react-router-dom';


const Services = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = cardsRef.current.getElementsByClassName("card");
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const cardsElement = cardsRef.current;
    cardsElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      cardsElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className='fcards' id='Services'>
      <div className='fcards-service-conttent'>
        <h3 className='fcardsh3'>
          <AnimatedHeading text='Our Services'/>
        </h3>
        <h4 className='fcardsh4'>
          <AnimatedHeading text='Empower Your Energy Vision: Discover Our Hydrogen Expertise 🌍.'/>
        </h4>
        <div id="cards" ref={cardsRef}>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={Hydrogen} alt='Hydrogen'/>
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <div className="card-info-title">
                    <h3>Hydrogen Solutions</h3>  
                    <h4>Our cutting-edge H2chain software models the entire value chain for informed decision-making. Maximize storage potential with optimized tank design and safety enhancements.</h4>
                  </div>    
                </div>
              </div>
            </div>
            <div className='pro__items'>
              <Link to='/HydrogenSolutions'>Get Started
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={Sol} alt='Engineering Solutions'/>
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <div className="card-info-title">
                    <h3>Engineering Solutions</h3>  
                    <h4>Experienced engineers use CAD/CAM software for prototyping, visualization, and DFM. Expertise ranges from consumer goods to aerospace, ensuring products meet specific requirements.</h4>
                  </div>    
                </div>  
              </div>
            </div>
            <div className='pro__items'>
              <Link to="/EngineeringSolutions">Get Started
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
              <img src={Laptop} alt='IT Solutions'/>
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <div className="card-info-title">
                    <h3>IT Solutions</h3>  
                    <h4>Unlock AI's power for predictive analytics, chatbots, process automation. Benefits: increased revenue, improved customer experience, reduced costs, enhanced operational efficiency.</h4>
                  </div>    
                </div>
              </div>
            </div>
            <div className='pro__items'>
              <Link to="/ITSolutions">Get Started
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={Support} alt='Laptop'/>
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <div className="card-info-title">
                    <h3>Support</h3>  
                    <h4>Our expert team provides technical assistance, training, and consulting, ensuring efficient operation and tailored solutions for diverse industries' specific needs.</h4>
                  </div>    
                </div>
              </div>
            </div>
            <div className='pro__items'>
              <a href="/#Contact">Get Started
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services