import React, { useState } from 'react'
import './HydroSolution.css'
import AnimatedHeading from '../../AnimatedHeading';
import HydroSol1 from '../Images/HydroSol1.jpeg'
import HydroSol2 from '../Images/HydroSol2.jpeg'
import HydroSol3 from '../Images/HydroSol3.jpeg'
import HydroSol4 from '../Images/HydroSol4.png'
import HydroSol5 from '../Images/HydroSol5.jpeg'
import HydroSol6 from '../Images/HydroSol6.jpeg'
import HydroSol7 from '../Images/HydroSol7.jpeg'
import HydroSol8 from '../Images/HydroSol8.jpeg'
import HydroSol9 from '../Images/HydroSol9.jpeg'
import HydroSol10 from '../Images/HydroSol10.jpeg'
import HydroSol11 from '../Images/HydroSol11.jpeg'
import HydroSol12 from '../Images/HydroSol12.jpeg'
import HydroSol13 from '../Images/HydroSol13.png'
import HydroSol14 from '../Images/HydroSol14.jpeg'
import HydroSol15 from '../Images/HydroSol15.jpeg'

const HydroSolution = () => {
    const [activeClass, setActiveClass] = useState();

    const handleClick = (index) => {
        setActiveClass(index);
    };
  return (
    <div className='Hydrosolution-section'>
        <div className='HydrosolutionContainer'>
            <div className='Hydrosolution-content'>
                <h3>
                    <AnimatedHeading text='Hydrogen Solutions'/>
                </h3>
                <h4>
                    <AnimatedHeading text="Unlocking Tomorrow's Energy with Innovative Hydrogen Solutions ⚡"/>
                </h4>
            </div>
            <div className='ITSolutions-Tit'>
                <hr className='ITSolutions-hr'/>
                <h1><AnimatedHeading text='Research & Development (R&D)'/></h1>
            </div>
            <div className='HydroServ-v1'>
                <h2>Pioneering innovation:</h2>
                <h4>Our dedicated R&D team is at the forefront of hydrogen technology development, pushing boundaries in:</h4>
            </div>
            <div className='HydroServ-Item1'>
                <div className='HydroServ-Col1'>
                    <div className={`HydroServ-Col1Img1 ${activeClass === 0 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol1} className='HydroSol1' alt='HydroSol1'/>
                    </div>
                    <div className={`HydroServ-Col1Img2 ${activeClass === 1 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol2} className='HydroSol2' alt='HydroSol2'/>
                    </div>
                    <div className={`HydroServ-Col1Img3 ${activeClass === 2 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol3} className='HydroSol3' alt='HydroSol3'/>
                    </div>
                </div>
                <div className='HydroServ-Col2'>
                    <div className={`HydroServ-Col2Text ${activeClass === 0 ? 'active' : 'notActive'}`} onClick={() => handleClick(0)}>
                        <span>Hydrogen production</span>
                        <span>Innovative electrolysis, photocatalysis, biohydrogen methods for clean, sustainable hydrogen production.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 1 ? 'active' : 'notActive'}`} onClick={() => handleClick(1)}>
                        <span>Hydrogen storage</span>
                        <span>Developing next-generation storage solutions for efficient and safe hydrogen transportation and utilization.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 2 ? 'active' : 'notActive'}`} onClick={() => handleClick(2)}>
                        <span>Hydrogen utilization</span>
                        <span>Optimizing hydrogen usage in various applications like fuel cells, industrial processes, and energy storage.</span>
                    </div>
                </div>
            </div>
            <div className='HydroServ-v1'>
                <h2>H2chain software:</h2>
                <h4>Experience the power of our cutting-edge simulation tool, designed to empower you to:</h4>
            </div>
            <div className='HydroServ-Item1'>
                <div className='HydroServ-Col1'>
                    <div className={`HydroServ-Col1Img1 ${activeClass === 3 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol4} className='HydroSol1' alt='HydroSol4'/>
                    </div>
                    <div className={`HydroServ-Col1Img2 ${activeClass === 4 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol5} className='HydroSol2' alt='HydroSol5'/>
                    </div>
                    <div className={`HydroServ-Col1Img3 ${activeClass === 5 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol6} className='HydroSol3' alt='HydroSol6'/>
                    </div>
                </div>
                <div className='HydroServ-Col2'>
                    <div className={`HydroServ-Col2Text ${activeClass === 3 ? 'active' : 'notActive'}`} onClick={() => handleClick(3)}>
                        <span>Model hydrogen</span>
                        <span>Understand the economic and environmental impacts of different production, storage, and utilization options.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 4 ? 'active' : 'notActive'}`} onClick={() => handleClick(4)}>
                        <span>Optimize operations</span>
                        <span>Identify cost-saving strategies and improve efficiency across your hydrogen ecosystem.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 5 ? 'active' : 'notActive'}`} onClick={() => handleClick(5)}>
                        <span>Inform investments</span>
                        <span>Gain valuable insights to guide your hydrogen technology investments.</span>
                    </div>
                </div>
            </div>
            <div className='ITSolutions-Tit'>
                <hr className='ITSolutions-hr'/>
                <h1><AnimatedHeading text='Hydrogen tank design & efficiency'/></h1>
            </div>
            <div className='HydroServ-v1'>
                <h2>Maximizing storage potential:</h2>
                <h4>Elevate your hydrogen storage solutions with our cutting-edge modeling expertise:</h4>
            </div>
            <div className='HydroServ-Item1'>
                <div className='HydroServ-Col1'>
                    <div className={`HydroServ-Col1Img1 ${activeClass === 6 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol7} className='HydroSol1' alt='HydroSol4'/>
                    </div>
                    <div className={`HydroServ-Col1Img2 ${activeClass === 7 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol8} className='HydroSol2' alt='HydroSol5'/>
                    </div>
                    <div className={`HydroServ-Col1Img3 ${activeClass === 8 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol9} className='HydroSol3' alt='HydroSol6'/>
                    </div>
                </div>
                <div className='HydroServ-Col2'>
                    <div className={`HydroServ-Col2Text ${activeClass === 6 ? 'active' : 'notActive'}`} onClick={() => handleClick(6)}>
                        <span>Optimize tank design</span>
                        <span>Minimize weight and maximize capacity for efficient storage and transportation.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 7 ? 'active' : 'notActive'}`} onClick={() => handleClick(7)}>
                        <span>Enhance safety</span>
                        <span>Ensure safe and reliable hydrogen storage under various operating conditions.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 8 ? 'active' : 'notActive'}`} onClick={() => handleClick(8)}>
                        <span>Reduce costs</span>
                        <span>Develop cost-effective storage solutions tailored to your specific needs.</span>
                    </div>
                </div>
            </div>
            <div className='ITSolutions-Tit'>
                <hr className='ITSolutions-hr'/>
                <h1><AnimatedHeading text='Partnerships & Collaborations'/></h1>
            </div>
            <div className='HydroServ-v1'>
                <h2>Building a stronger ecosystem:</h2>
                <h4>We actively collaborate with leading research institutions, technology providers, and industry players to:</h4>
            </div>
            <div className='HydroServ-Item1'>
                <div className='HydroServ-Col1'>
                    <div className={`HydroServ-Col1Img1 ${activeClass === 9 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol10} className='HydroSol1' alt='HydroSol4'/>
                    </div>
                    <div className={`HydroServ-Col1Img3 ${activeClass === 10 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol11} className='HydroSol2' alt='HydroSol5'/>
                    </div>
                    <div className={`HydroServ-Col1Img3 ${activeClass === 11 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol12} className='HydroSol3' alt='HydroSol6'/>
                    </div>
                </div>
                <div className='HydroServ-Col2'>
                    <div className={`HydroServ-Col2Text ${activeClass === 9 ? 'active' : 'notActive'}`} onClick={() => handleClick(9)}>
                        <span>Accelerate hydrogen development</span>
                        <span>Share knowledge and expertise to advance hydrogen technologies faster.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 10 ? 'active' : 'notActive'}`} onClick={() => handleClick(10)}>
                        <span>Promote market adoption</span>
                        <span>Collaborate on initiatives to overcome barriers and expand hydrogen infrastructure.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 11 ? 'active' : 'notActive'}`} onClick={() => handleClick(11)}>
                        <span>Shape the future of hydrogen</span>
                        <span>Work together to create a sustainable and hydrogen-powered future.</span>
                    </div>
                </div>
            </div>
            <div className='ITSolutions-Tit'>
                <hr className='ITSolutions-hr'/>
                <h1><AnimatedHeading text='Training & Education'/></h1>
            </div>
            <div className='HydroServ-v1'>
                <h2>Empowering knowledge transfer:</h2>
                <h4>We offer comprehensive training programs on hydrogen technology fundamentals for:</h4>
            </div>
            <div className='HydroServ-Item1'>
                <div className='HydroServ-Col1'>
                    <div className={`HydroServ-Col1Img1 ${activeClass === 12 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol13} className='HydroSol1' alt='HydroSol4'/>
                    </div>
                    <div className={`HydroServ-Col1Img2 ${activeClass === 13 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol14} className='HydroSol2' alt='HydroSol5'/>
                    </div>
                    <div className={`HydroServ-Col1Img3 ${activeClass === 14 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol15} className='HydroSol3' alt='HydroSol6'/>
                    </div>
                </div>
                <div className='HydroServ-Col2'>
                    <div className={`HydroServ-Col2Text ${activeClass === 12 ? 'active' : 'notActive'}`} onClick={() => handleClick(12)}>
                        <span>Employees</span>
                        <span>Upskill your workforce and prepare them for the hydrogen economy.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 13 ? 'active' : 'notActive'}`} onClick={() => handleClick(13)}>
                        <span>Customers</span>
                        <span>Gain a deeper understanding of hydrogen solutions to make informed decisions.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 14 ? 'active' : 'notActive'}`} onClick={() => handleClick(14)}>
                        <span>Partners</span>
                        <span>Collaborate effectively and contribute to the growth of the hydrogen ecosystem.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HydroSolution