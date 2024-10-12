import React, { useState } from 'react'
// import './HydroSolution.css'
import AnimatedHeading from '../../AnimatedHeading';
import EngSol1 from '../Images/EngSol1.jpeg'
import EngSol2 from '../Images/EngSol2.jpeg'
import EngSol3 from '../Images/EngSol3.jpeg'
import EngSol4 from '../Images/EngSol4.jpeg'
import EngSol5 from '../Images/EngSol5.jpeg'
import EngSol6 from '../Images/EngSol6.jpeg'
import EngSol7 from '../Images/EngSol7.jpeg'
import EngSol8 from '../Images/EngSol8.jpeg'
import EngSol9 from '../Images/EngSol9.jpeg'
import EngSol10 from '../Images/EngSol10.jpeg'
import EngSol11 from '../Images/EngSol11.jpeg'
import EngSol12 from '../Images/EngSol12.jpeg'
import EngSol13 from '../Images/EngSol13.jpeg'
import EngSol14 from '../Images/EngSol14.jpeg'
import EngSol15 from '../Images/EngSol15.jpeg'
import EngSol16 from '../Images/EngSol16.jpeg'
import EngSol17 from '../Images/EngSol17.jpeg'
import EngSol18 from '../Images/EngSol18.jpeg'
import HydroSol10 from '../Images/HydroSol10.jpeg'
import HydroSol11 from '../Images/HydroSol11.jpeg'
import HydroSol12 from '../Images/HydroSol12.jpeg'

const EnginSolution = () => {
    const [activeClass, setActiveClass] = useState();

    const handleClick = (index) => {
        setActiveClass(index);
    };
  return (
    <div className='Hydrosolution-section'>
        <div className='HydrosolutionContainer'>
            <div className='Hydrosolution-content'>
                <h3>
                    <AnimatedHeading text='Engineering Solutions'/>
                </h3>
                <h4>
                    <AnimatedHeading text="Pioneering the Future, One Innovation at a Time🌍"/>
                </h4>
            </div>
            <div className='ITSolutions-Tit'>
                <hr className='ITSolutions-hr'/>
                <h1><AnimatedHeading text='Product Design & Development'/></h1>
            </div>
            <div className='HydroServ-v1'>
                <h2>From concept to reality</h2>
                <h4>Our experienced engineers utilize cutting-edge design tools like CAD/CAM software to bring your ideas to life. We excel in:</h4>
            </div>
            <div className='HydroServ-Item1'>
                <div className='HydroServ-Col1'>
                    <div className={`HydroServ-Col1Img1 ${activeClass === 0 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol1} className='HydroSol1' alt='engSol' loading="lazy" title="Smart4Technologies Product Design & Development"/>
                    </div>
                    <div className={`HydroServ-Col1Img2 ${activeClass === 1 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol2} className='HydroSol2' alt='engSol' loading="lazy" title="Smart4Technologies Product Design & Development"/>
                    </div>
                    <div className={`HydroServ-Col1Img3 ${activeClass === 2 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol3} className='HydroSol3' alt='engSol' loading="lazy" title="Smart4Technologies Product Design & Development"/>
                    </div>
                </div>
                <div className='HydroServ-Col2'>
                    <div className={`HydroServ-Col2Text ${activeClass === 0 ? 'active' : 'notActive'}`} onClick={() => handleClick(0)}>
                        <span>Prototyping</span>
                        <span>Quickly and efficiently create physical models for validation and testing.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 1 ? 'active' : 'notActive'}`} onClick={() => handleClick(1)}>
                        <span>Visualization</span>
                        <span>Develop stunning 3D models for clear communication and stakeholder buy-in.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 2 ? 'active' : 'notActive'}`} onClick={() => handleClick(2)}>
                        <span>Design for manufacturability (DFM)</span>
                        <span>Ensure your product is optimized for production efficiency and cost savings.</span>
                    </div>
                </div>
            </div>
            <div className='HydroServ-v1'>
                <h2>H2chain software:</h2>
                <h4>Experience the power of our cutting-edge simulation tool, designed to empower you to:</h4>
            </div>
            <div className='ITSolutions-Tit'>
                <hr className='ITSolutions-hr'/>
                <h1><AnimatedHeading text='Material Science & Testing'/></h1>
            </div>
            <div className='HydroServ-v1'>
                <h2>The right material for the job:</h2>
                <h4>Our team of material scientists helps you select the perfect material based on:</h4>
            </div>
            <div className='HydroServ-Item1'>
                <div className='HydroServ-Col1'>
                    <div className={`HydroServ-Col1Img1 ${activeClass === 3 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol4} className='HydroSol1' alt='engSol' loading="lazy" title="Smart4Technologies Material Science & Testing"/>
                    </div>
                    <div className={`HydroServ-Col1Img2 ${activeClass === 4 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol5} className='HydroSol2' alt='engSol' loading="lazy" title="Smart4Technologies Material Science & Testing"/>
                    </div>
                    <div className={`HydroServ-Col1Img3 ${activeClass === 5 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol6} className='HydroSol3' alt='engSol' loading="lazy" title="Smart4Technologies Material Science & Testing"/>
                    </div>
                </div>
                <div className='HydroServ-Col2'>
                    <div className={`HydroServ-Col2Text ${activeClass === 3 ? 'active' : 'notActive'}`} onClick={() => handleClick(3)}>
                        <span>Mechanical properties</span>
                        <span>Strength, weight, fatigue resistance, etc.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 4 ? 'active' : 'notActive'}`} onClick={() => handleClick(4)}>
                        <span>Durability</span>
                        <span>Ensure your product withstands real-world conditions.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 5 ? 'active' : 'notActive'}`} onClick={() => handleClick(5)}>
                        <span>Cost-effectiveness</span>
                        <span>Optimize material selection for budget constraints.</span>
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
                    <div className={`HydroServ-Col1Img1 ${activeClass === 6 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol10} className='HydroSol1' alt='engSol' loading="lazy" title="Smart4Technologies Partnerships & Collaborations"/>
                    </div>
                    <div className={`HydroServ-Col1Img2 ${activeClass === 7 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol11} className='HydroSol2' alt='engSol' loading="lazy" title="Smart4Technologies Partnerships & Collaborations"/>
                    </div>
                    <div className={`HydroServ-Col1Img3 ${activeClass === 8 ? 'expanded' : 'collapsed'}`}>
                        <img src={HydroSol12} className='HydroSol3' alt='engSol' loading="lazy" title="Smart4Technologies Partnerships & Collaborations"/>
                    </div>
                </div>
                <div className='HydroServ-Col2'>
                    <div className={`HydroServ-Col2Text ${activeClass === 6 ? 'active' : 'notActive'}`} onClick={() => handleClick(6)}>
                        <span>Accelerate hydrogen development</span>
                        <span>Share knowledge and expertise to advance hydrogen technologies faster.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 7 ? 'active' : 'notActive'}`} onClick={() => handleClick(7)}>
                        <span>Promote market adoption</span>
                        <span>Collaborate on initiatives to overcome barriers and expand hydrogen infrastructure.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 8 ? 'active' : 'notActive'}`} onClick={() => handleClick(8)}>
                        <span>Shape the future of hydrogen</span>
                        <span>Work together to create a sustainable and hydrogen-powered future.</span>
                    </div>
                </div>
            </div>
            <div className='ITSolutions-Tit'>
                <hr className='ITSolutions-hr'/>
                <h1><AnimatedHeading text='Consulting Services'/></h1>
            </div>
            <div className='HydroServ-v1'>
                <h2>Tailored solutions for your needs:</h2>
                <h4>We offer two consulting modes to empower your projects:</h4>
            </div>
            <div className='HydroServ-Item1'>
                <div className='HydroServ-Col1'>
                    <div className={`HydroServ-Col1Img1 ${activeClass === 9 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol7} className='HydroSol1' alt='engSol' loading="lazy" title="Smart4Technologies Consulting Services"/>
                    </div>
                    <div className={`HydroServ-Col1Img2 ${activeClass === 10 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol8} className='HydroSol2' alt='engSol' loading="lazy" title="Smart4Technologies Consulting Services"/>
                    </div>
                    <div className={`HydroServ-Col1Img3 ${activeClass === 11 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol9} className='HydroSol3' alt='engSol' loading="lazy" title="Smart4Technologies Consulting Services"/>
                    </div>
                </div>
                <div className='HydroServ-Col2'>
                    <div className={`HydroServ-Col2Text ${activeClass === 9 ? 'active' : 'notActive'}`} onClick={() => handleClick(9)}>
                        <span>On-site engineering teams</span>
                        <span>Integrate seamlessly with your existing team, providing expertise and support.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 10 ? 'active' : 'notActive'}`} onClick={() => handleClick(10)}>
                        <span>Project-based consulting</span>
                        <span>Tackle specific challenges and deliver successful outcomes.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 11 ? 'active' : 'notActive'}`} onClick={() => handleClick(11)}>
                        <span>On-site missions</span>
                        <span>Get expert assistance on complex issues directly at your location.</span>
                    </div>
                </div>
            </div>
            <div className='HydroServ-v1'>
                <h2>Trusted partner:</h2>
                <h4>We pride ourselves on:</h4>
            </div>
            <div className='HydroServ-Item1'>
                <div className='HydroServ-Col1'>
                    <div className={`HydroServ-Col1Img1 ${activeClass === 12 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol10} className='HydroSol1' alt='engSol' loading="lazy" title="Smart4Technologies Consulting Services"/>
                    </div>
                    <div className={`HydroServ-Col1Img2 ${activeClass === 13 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol11} className='HydroSol2' alt='engSol' loading="lazy" title="Smart4Technologies Consulting Services"/>
                    </div>
                    <div className={`HydroServ-Col1Img3 ${activeClass === 14 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol12} className='HydroSol3' alt='engSol' loading="lazy" title="Smart4Technologies Consulting Services"/>
                    </div>
                </div>
                <div className='HydroServ-Col2'>
                    <div className={`HydroServ-Col2Text ${activeClass === 12 ? 'active' : 'notActive'}`} onClick={() => handleClick(12)}>
                        <span>Accuracy</span>
                        <span>Delivering reliable and dependable results.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 13 ? 'active' : 'notActive'}`} onClick={() => handleClick(13)}>
                        <span>Deep experience</span>
                        <span>Proven track record across diverse industries.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 14 ? 'active' : 'notActive'}`} onClick={() => handleClick(14)}>
                        <span>On-time delivery</span>
                        <span>Meeting deadlines and exceeding expectations.</span>
                    </div>
                </div>
            </div>
            <div className='ITSolutions-Tit'>
                <hr className='ITSolutions-hr'/>
                <h1><AnimatedHeading text='Finite Element Analysis Expertise'/></h1>
            </div>
            <div className='HydroServ-v1'>
                <h2>Unveiling the unseen:</h2>
                <h4>Our engineers are highly skilled in FEA using ABAQUS software, providing:</h4>
            </div>
            <div className='HydroServ-Item1'>
                <div className='HydroServ-Col1'>
                    <div className={`HydroServ-Col1Img1 ${activeClass === 15 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol13} className='HydroSol1' alt='engSol' loading="lazy" title="Smart4Technologies Finite Element Analysis Expertise"/>
                    </div>
                    <div className={`HydroServ-Col1Img2 ${activeClass === 16 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol14} className='HydroSol2' alt='engSol' loading="lazy" title="Smart4Technologies Finite Element Analysis Expertise"/>
                    </div>
                    <div className={`HydroServ-Col1Img3 ${activeClass === 17 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol15} className='HydroSol3' alt='engSol' loading="lazy" title="Smart4Technologies Finite Element Analysis Expertise"/>
                    </div>
                </div>
                <div className='HydroServ-Col2'>
                    <div className={`HydroServ-Col2Text ${activeClass === 15 ? 'active' : 'notActive'}`} onClick={() => handleClick(15)}>
                        <span>Stress and strain analysis</span>
                        <span>Optimize product design for strength and durability.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 16 ? 'active' : 'notActive'}`} onClick={() => handleClick(16)}>
                        <span>Thermal analysis</span>
                        <span>Ensure efficient heat transfer and prevent overheating.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 17 ? 'active' : 'notActive'}`} onClick={() => handleClick(17)}>
                        <span>Fluid flow analysis</span>
                        <span>Optimize fluid dynamics for optimal performance.</span>
                    </div>
                </div>
            </div>
            <div className='ITSolutions-Tit'>
                <hr className='ITSolutions-hr'/>
                <h1><AnimatedHeading text='Technical Support & Skills Development'/></h1>
            </div>
            <div className='HydroServ-v1'>
                <h2>Beyond the project:</h2>
                <h4>We offer ongoing technical support and continuous skills development for your team:</h4>
            </div>
            <div className='HydroServ-Item1'>
                <div className='HydroServ-Col1'>
                    <div className={`HydroServ-Col1Img1 ${activeClass === 18 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol16} className='HydroSol1' alt='engSol' loading="lazy" title="Smart4Technologies Technical Support & Skills Development"/>
                    </div>
                    <div className={`HydroServ-Col1Img2 ${activeClass === 19 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol17} className='HydroSol2' alt='engSol' loading="lazy" title="Smart4Technologies Technical Support & Skills Development"/>
                    </div>
                    <div className={`HydroServ-Col1Img3 ${activeClass === 20 ? 'expanded' : 'collapsed'}`}>
                        <img src={EngSol18} className='HydroSol3' alt='engSol' loading="lazy" title="Smart4Technologies Technical Support & Skills Development"/>
                    </div>
                </div>
                <div className='HydroServ-Col2'>
                    <div className={`HydroServ-Col2Text ${activeClass === 18 ? 'active' : 'notActive'}`} onClick={() => handleClick(18)}>
                        <span>Technical follow-up</span>
                        <span>Answer questions and provide guidance after project completion.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 19 ? 'active' : 'notActive'}`} onClick={() => handleClick(19)}>
                        <span>Expert support</span>
                        <span>Access our team's expertise for ongoing needs.</span>
                    </div>
                    <div className={`HydroServ-Col2Text ${activeClass === 20 ? 'active' : 'notActive'}`} onClick={() => handleClick(20)}>
                        <span>Training and workshops</span>
                        <span>Upskill your team with industry-leading training programs.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EnginSolution