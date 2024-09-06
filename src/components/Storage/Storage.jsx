import React from 'react'
import './Storage.css'
import AnimatedHeading from '../../AnimatedHeading';
import hydroStorage from '../Images/strg.png'
import Thank from '../Images/thank2.jpeg'
import storage1 from '../Images/s1.png'
import storage2 from '../Images/s2.png'
import storage3 from '../Images/s3.png'
import storage4 from '../Images/s4.png'
import storage5 from '../Images/s5.png'
import ParticlesComponent from '../LandingPage/Particles';


const Storage = () => {
  return (
    <div className='storage-section'>
        <ParticlesComponent/>
        <div className='storageContainer'>
            <div className='storage-content'>
                <h3>
                    <AnimatedHeading text='Storage'/>
                </h3>
                <h4>
                    <AnimatedHeading text='Advancing Techniques in Hydrogen Storage Solutions'/>
                </h4>
            </div>
            <div className='storage-content2'>
                <div className='storage-imgFt'>
                    <img src={hydroStorage} className="hydroStorage"/>
                </div>
                <div className='storage-textFt'>
                    <h1><AnimatedHeading text='Hydrogen'/></h1>
                    <h1><AnimatedHeading text='Storage'/></h1>
                </div>
            </div>
            <div className='storage-content2'>
                <div className='storage-textFt2'>
                    <p>Hydrogen storage involves the safe and efficient containment of hydrogen gas for diverse applications, such as energy production, transportation, and industrial processes. Given that hydrogen is a lightweight and highly reactive gas, effective storage is crucial yet challenging. The key challenges include ensuring safety due to its flammability, managing the large volume needed to store enough hydrogen, addressing weight concerns for mobile applications, and optimizing energy density to make storage more practical and cost-effective. Overcoming these challenges is essential for the widespread adoption of hydrogen as a clean energy source, driving innovation in storage technologies like compression, liquefaction, and advanced materials such as metal hydrides and carbon-based systems.</p>
                </div>
                <div className='storage-imgFt2'>
                    <img src={Thank} className="Thank"/>
                </div>
            </div>
            <h3 className='sectionMethods2'>Cutting-Edge Hydrogen Storage Methods:</h3>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Compressed Gas'/></h1>
            </div>
            <div className='storage-content2'>
            <div className='storage-imgFt5'>
                    <img src={storage1} className="storage1"/>
                </div>
                <div className='storage-textFt2'>
                    <p>Hydrogen gas can be compressed at high pressures (usually between 350 and 700 bar) and stored in high-pressure tanks made of strong materials like carbon fiber or metal alloys. Compressed gas storage is one of the simplest methods but requires robust tank designs to ensure safety and efficiency.</p>
                </div>
            </div>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Liquid Hydrogen'/></h1>
            </div>
            <div className='storage-content2'>
                <div className='storage-imgFt5'>
                    <img src={storage2} className="storage2"/>
                </div>
                <div className='storage-textFt2'>
                    <p>Hydrogen can be liquefied at very low temperatures (below -253°C or 20 K) and stored in cryogenic tanks. Liquid hydrogen offers higher energy density compared to compressed gas storage, but it requires significant energy for liquefaction and specialized storage infrastructure.</p>
                </div>
            </div>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Liquid Hydrogen'/></h1>
            </div>
            <div className='storage-content2'>
                <div className='storage-imgFt5'>
                    <img src={storage3} className="storage3"/>
                </div>
                <div className='storage-textFt2'>
                    <p>Certain metals and alloys can absorb and release hydrogen gas under specific conditions, forming metal hydrides. Metal hydride storage systems offer moderate energy density and can operate at lower pressures, making them potentially safer and more compact than compressed gas storage. However, they can be costly and may suffer from slow hydrogen uptake and release rates.</p>
                </div>
            </div>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Chemical Hydrogen'/></h1>
            </div>
            <div className='storage-content2'>
                <div className='storage-imgFt5'>
                    <img src={storage4} className="storage4"/>
                </div>
                <div className='storage-textFt2'>
                    <p>Hydrogen can be stored in chemical compounds that release hydrogen upon demand. For example, hydrides, ammonia borane, and liquid organic hydrogen carriers (LOHCs) are some of the chemical storage options being researched. Chemical storage offers the potential for high energy density and reversible hydrogen storage, but practical implementation often involves challenges related to stability, efficiency, and cost.</p>
                </div>
            </div>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Adsorbed Gas'/></h1>
            </div>
            <div className='storage-content2'>
                <div className='storage-imgFt5'>
                    <img src={storage5} className="storage5"/>
                </div>
                <div className='storage-textFt2'>
                    <p>Certain porous materials like activated carbon or metal-organic frameworks (MOFs) can adsorb hydrogen gas onto their surfaces through physisorption or chemisorption. Adsorbed gas storage systems offer potential advantages in terms of weight and volume compared to compressed gas storage, but they require materials with high hydrogen uptake capacities and suitable operating conditions.</p>
                </div>
            </div>
            <h3 className='sectionBlue'>Each storage method has its advantages and disadvantages, and the choice of storage technology depends on factors such as application requirements, safety considerations, cost-effectiveness, and infrastructure availability. Ongoing research and development aim to improve the performance and feasibility of hydrogen storage technologies to enable widespread adoption of hydrogen as a clean and renewable energy carrier.</h3>
        </div>
    </div>
  )
}

export default Storage