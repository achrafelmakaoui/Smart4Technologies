import React, { useState } from 'react'
import './ITSolution.css'
import AnimatedHeading from '../../AnimatedHeading';

import ITSol1 from '../Images/ITSol1.jpeg'
import ITSol2 from '../Images/ITSol2.jpeg'
import ITSol3 from '../Images/ITSol3.jpeg'
import ITSol4 from '../Images/ITSol4.jpeg'
import ITSol5 from '../Images/ITSol5.jpeg'



const ITSolution = () => {
    const [activeClass, setActiveClass] = useState();

    const handleClick = (index) => {
        setActiveClass(index);
    };
  return (
    <div className='ITsolution-section'>
        <div className='ITsolutionContainer'>
            <div className='ITsolution-content'>
                <h3>
                    <AnimatedHeading text='IT Solutions'/>
                </h3>
                <h4>
                    <AnimatedHeading text="Your Trusted Partner for Digital Transformation"/>
                </h4>
            </div>
            <div className='ITSolutions-Tit'>
                <hr className='ITSolutions-hr'/>
                <h1><AnimatedHeading text='AI & Machine Learning Applications'/></h1>
            </div>
            <div className='ITServ-v1'>
                <h2>Unlock the power of AI:</h2>
                <h4>We develop AI-driven solutions that help you gain valuable insights, improve decision-making, and automate tasks.</h4>
            </div>
            <div className='ITServ-Item1'>
                <div className='ITServ-Col1'>
                    <div className='ITServ-v1'>
                        <h2>Our expertise covers:</h2>
                        <h4>We offer a comprehensive range of cloud services, including:</h4>
                    </div>
                    <div className='ITServ-v2'>
                        <div className={`ITServ-Col1Img1 ${activeClass === 0 ? 'expanded' : 'collapsed'}`}>
                            <img src={ITSol1} className='HydroSol1' alt='ITSol'/>
                        </div>
                        <div className={`ITServ-Col1Img2 ${activeClass === 1 ? 'expanded' : 'collapsed'}`}>
                            <img src={ITSol2} className='HydroSol2' alt='ITSol'/>
                        </div>
                        <div className={`ITServ-Col1Img3 ${activeClass === 2 ? 'expanded' : 'collapsed'}`}>
                            <img src={ITSol3} className='HydroSol3' alt='ITSol'/>
                        </div>
                        <div className={`ITServ-Col1Img4 ${activeClass === 3 ? 'expanded' : 'collapsed'}`}>
                            <img src={ITSol4} className='HydroSol3' alt='ITSol'/>
                        </div>
                        <div className={`ITServ-Col1Img5 ${activeClass === 4 ? 'expanded' : 'collapsed'}`}>
                            <img src={ITSol5} className='HydroSol3' alt='ITSol'/>
                        </div>
                    </div>
                </div>
                <div className='ITServ-Col2'>
                    <div className={`ITServ-Col2Text ${activeClass === 0 ? 'active' : 'notActive'}`} onClick={() => handleClick(0)}>
                        <span>Predictive analytics</span>
                        <span>Predicting future trends and customer behavior to optimize your operations.</span>
                    </div>
                    <div className={`ITServ-Col2Text ${activeClass === 1 ? 'active' : 'notActive'}`} onClick={() => handleClick(1)}>
                        <span>Personalized recommendations</span>
                        <span>Delivering relevant products and services to your customers.</span>
                    </div>
                    <div className={`ITServ-Col2Text ${activeClass === 2 ? 'active' : 'notActive'}`} onClick={() => handleClick(2)}>
                        <span>Process automation</span>
                        <span>Automating repetitive tasks to improve efficiency and productivity.</span>
                    </div>
                    <div className={`ITServ-Col2Text ${activeClass === 3 ? 'active' : 'notActive'}`} onClick={() => handleClick(3)}>
                        <span>Chatbots and virtual assistants</span>
                        <span>Providing 24/7 customer support and automating interactions.</span>
                    </div>
                    <div className={`ITServ-Col2Text ${activeClass === 4 ? 'active' : 'notActive'}`} onClick={() => handleClick(4)}>
                        <span>Image and video recognition</span>
                        <span>Analyzing visual data for insights and automation.</span>
                    </div>
                </div>
            </div>
            <div className='ITServ-v1'>
                <h2>Benefits:</h2>
                <h4>Increased revenue, improved customer experience, reduced costs, and enhanced operational efficiency.</h4>
            </div>
        </div>
    </div>
  )
}

export default ITSolution