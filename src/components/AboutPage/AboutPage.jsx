import React from 'react';
import './AboutPage.css'
import Developer from '../Images/aboutImg2.jpeg'
import About from '../Images/AboutUs.png'
import H2 from '../Images/H2.png'
import { AnimatedTooltip } from '../TeamAbout/AnimatedTooltip';
import items from "../TeamAbout/Item";
import { CardStackDemo } from '../CardStack/CardStackDemo';
import AnimatedHeading from '../../AnimatedHeading';

const AboutPage = () => {

  return (
    <section className="about" id="About">
        <div className="AboutContainer">
            <div className="about-content">
                <div className="text-side">
                    <h3>
                        <AnimatedHeading text='About Us'/>
                    </h3>
                    <h4>
                        <AnimatedHeading text='We Are S4T: Pioneers in Hydrogen System Solutions 🌍🔋💡'/>
                    </h4>
                    <p>
                    Smart4Technologies (S4T) leads in innovation, providing advanced software for planning, modeling, and optimizing hydrogen system value chains globally. Powered by reliable data from diverse energy inputs and renewables, our solution meets the needs of academic experts, consultants, business strategists, project developers, and engineers. At S4T, we drive sustainable energy's future with cutting-edge technology and expertise.
                    </p>
                </div>
                <div className="img-side">
                    <img src={H2} alt="emoji" className="work-emoji" loading="lazy" title="Hydrogen Icon"/>
                    <img src={Developer} className="img-side__main-img" alt="about" loading="lazy" title="Hydrogeen Thank"/>
                    <span className="circleHydro">
                        <img src={About} alt="emoji" loading="lazy" title="About Our Hydrogen Solutions"/>
                    </span>
                </div>
            </div>
        </div>
        <div className="AboutContainer2">
            <div className="about-content2">
                <div className="img-side2">
                        <h2>Our team is formed by professional <mark>specialists.</mark></h2>
                    <div className='AnimatedTooltip'>
                      <AnimatedTooltip items={items}/>
                    </div>
                </div>
                <div className="text-side2">
                    <CardStackDemo/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutPage