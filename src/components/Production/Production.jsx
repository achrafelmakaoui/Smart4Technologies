import React from 'react'
import './Production.css'
import AnimatedHeading from '../../AnimatedHeading';
import Grelectrolysis from '../Images/grelectrolysis .png'
import Grelectrolysis2 from '../Images/Grelectrolysis2.jpeg'
import ectrolysis1 from '../Images/e1.png'
import ectrolysis2 from '../Images/e2.png'
import ectrolysis3 from '../Images/e3.png'
import ectrolysis4 from '../Images/e4.png'
import Pemectrolysis from '../Images/pem.jpeg'
import Anode from '../Images/anode.png'
import Cathode from '../Images/catod.png'
import ParticlesComponent from '../LandingPage/Particles';


const Production = () => {
  return (
    <div className='production-section'>
        <ParticlesComponent/>
        <div className='productionContainer'>
            <div className='production-content'>
                <h3>
                    <AnimatedHeading text='Production'/>
                </h3>
                <h4>
                    <AnimatedHeading text='Exploring Electrolysis Methods in Green Hydrogen Production'/>
                </h4>
            </div>
            <div className='production-contentheader'>
                <div className='production-imgFt'>
                    <img src={Grelectrolysis} className="Grelectrolysis" alt='production'/>
                </div>
                <div className='production-textFt'>
                    <h1><AnimatedHeading text='Green'/></h1>
                    <h1><AnimatedHeading text='Hydrogen'/></h1>
                    <h1><AnimatedHeading text='Electrolysis'/></h1>
                </div>
            </div>
            <div className='production-content2'>
                <div className='production-textFt2'>
                    <p>In the pursuit of sustainable energy solutions, green hydrogen has emerged as a promising clean energy carrier. Central to its production is the process of electrolysis, where water is split into hydrogen and oxygen using electricity derived from renewable sources. Different types of electrolysis technologies are employed, each offering unique benefits and challenges depending on the specific application and desired efficiency. Understanding these technologies is crucial for advancing green hydrogen production and achieving global energy transition goals. Here are the main types of electrolysis used in this process:</p>
                </div>
                <div className='production-imgFt2'>
                    <img src={Grelectrolysis2} className="Grelectrolysis2" alt='production'/>
                </div>
            </div>
            <h3 className='sectionMethods2'>Discover the key electrolysis methods driving green hydrogen production:</h3>
            <div className='production-content10'>
                <div className='production-imgFt3'>
                    <img src={ectrolysis1} className="ectrolysis1" alt='production'/>
                </div>
                <div className='production-textFt2'>
                    <p>Alkaline Electrolysis: This is one of the oldest and most established electrolysis technologies. It operates at relatively high temperatures and uses an alkaline electrolyte solution, typically potassium hydroxide (KOH) or sodium hydroxide (NaOH). Alkaline electrolyzers are known for their high efficiency and reliability, but they are also relatively large and require pure water input.</p>
                </div>
            </div>
            <div className='production-content11'>
                <div className='production-textFt2'>
                    <p>PEM (Proton Exchange Membrane) Electrolysis: PEM Electrolysis operates at lower temperatures compared to alkaline electrolysis and uses a solid polymer electrolyte membrane to conduct protons. This technology offers advantages such as rapid start-up times, high efficiency at part-load operation, and compact design. PEM electrolyzers are particularly suitable for small-scale applications and for integrating with renewable energy sources like solar and wind.</p>
                </div>
                <div className='production-imgFt4'>
                    <img src={ectrolysis2} className="ectrolysis2" alt='production'/>
                </div>
            </div>
            <div className='production-content10'>
                <div className='production-imgFt5'>
                    <img src={ectrolysis3} className="ectrolysis3" alt='production'/>
                </div>
                <div className='production-textFt2'>
                    <p>Solid Oxide Electrolysis: Solid oxide electrolysis cells (SOEC) operate at high temperatures, typically above 500°C, and use a solid ceramic electrolyte. They can operate in reverse mode, converting steam and electricity into hydrogen and oxygen. SOECs have the potential for high efficiency, especially when waste heat from other industrial processes is utilized, but they currently face challenges related to materials durability and cost.</p>
                </div>
            </div>
            <div className='production-content11'>
                <div className='production-textFt2'>
                    <p>High-Temperature Electrolysis: High-temperature electrolysis (HTE) operates at temperatures similar to solid oxide electrolysis but uses different materials and operating principles. It typically involves the use of solid oxide electrolyte materials like cerium oxide (ceria) or yttria-stabilized zirconia (YSZ). HTE has the advantage of utilizing heat from high-temperature sources such as concentrated solar power or nuclear reactors to improve overall energy efficiency.</p>
                </div>
                <div className='production-imgFt5'>
                    <img src={ectrolysis4} className="ectrolysis4" alt='production'/>
                </div>
            </div>
            <h3 className='sectionBlue'>Each type of electrolysis technology has its own advantages and challenges, and the choice of technology depends on factors such as scale, efficiency, cost, and specific application requirements. Ongoing research and development efforts aim to improve the performance and cost-effectiveness of electrolysis technologies to accelerate the adoption of green hydrogen as a clean energy carrier.</h3>
            <div className='production-content2'>
                <div className='production-textFt2'>
                    <h3>Proton Exchange</h3>
                    <h3>Membrane (PEM) Electrolysis:</h3>
                    <p>In PEM electrolyzers, an acidic polymer membrane acts as the electrolyte, separating hydrogen from oxygen in water through the application of an electric current. The process involves a negatively charged cathode and a positively charged anode. The reactions involved in PEM electrolysis are as follows:</p>
                </div>
                <div className='production-imgFt2'>
                    <img src={Pemectrolysis} className="Pemectrolysis" alt='production'/>
                </div>
            </div>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Anode Reaction'/></h1>
            </div>
            <div className='production-content10'>
            <div className='production-imgFt5'>
                    <img src={Anode} className="ectrolysis4" alt='production'/>
                </div>
                <div className='production-textFt2'>
                    <h2>2H<sup> +</sup> + 2e<sup> -</sup> → H2</h2>
                    <p>At the anode, water is split into oxygen gas, hydrogen ions (protons), and electrons. The protons are released into the electrolyte, while the electrons flow through an external circuit.</p>
                </div>
            </div>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Catode Reaction'/></h1>
            </div>
            <div className='production-content10'>
                <div className='production-imgFt5'>
                    <img src={Cathode} className="ectrolysis4" alt='production'/>
                </div>
                <div className='production-textFt2'>
                    <h2>2H<sup> +</sup> + 2e<sup> -</sup> → H2</h2>
                    <p>At the cathode, the protons from the anode combine with the electrons that have traveled through the external circuit. This recombination produces hydrogen gas.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Production