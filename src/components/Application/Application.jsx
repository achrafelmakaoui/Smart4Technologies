import React from 'react'
import './Application.css'
import AnimatedHeading from '../../AnimatedHeading';
import hydroApp from '../Images/appHydro.png'
import ApplicationHydrogen from '../Images/ApplicationHydrogen.jpeg'
import Ap1 from '../Images/A1.png'
import Ap2 from '../Images/A2.png'
import Ap3 from '../Images/A3.png'
import Ap4 from '../Images/A4.png'
import Ap5 from '../Images/A5.png'
import Ap6 from '../Images/A6.png'
import Ap7 from '../Images/A7.png'
import Ap8 from '../Images/A8.png'


const Application = () => {
  return (
    <div className='application-section'>
        <div className='applicationContainer'>
            <div className='application-content'>
                <h3>
                    <AnimatedHeading text='Application'/>
                </h3>
                <h4>
                    <AnimatedHeading text='Revolutionizing Industries: The Broad Applications of Hydrogen'/>
                </h4>
            </div>
            <div className='application-contentheader'>
                <div className='application-imgFt'>
                    <img src={hydroApp} className="hydroapplication" alt='application' loading="lazy" title="Hydrogen Application"/>
                </div>
                <div className='application-textFt'>
                    <h1><AnimatedHeading text='Hydrogen'/></h1>
                    <h1><AnimatedHeading text='Application'/></h1>
                </div>
            </div>
            <div className='application-content2'>
                <div className='application-textFt2'>
                    <p>Hydrogen boasts a vast array of applications across numerous sectors, owing to its versatile properties as both an energy carrier and a chemical feedstock. These applications span a wide range of industries, reflecting hydrogen's ability to play a crucial role in the global transition to clean energy. As an energy carrier, hydrogen can be utilized in various forms, such as fuel for transportation, storage for renewable energy, and a source of power for industrial processes. Additionally, its role as a chemical feedstock makes it indispensable in the production of essential chemicals, such as ammonia and methanol. The diverse applications of hydrogen extend from powering fuel cells for clean energy generation to its use in space exploration, offering promising solutions for reducing carbon emissions and advancing sustainable technologies.</p>
                </div>
                <div className='application-imgFt2'>
                    <img src={ApplicationHydrogen} className="AppHydro" alt='application' loading="lazy" title="Hydrogen Application"/>
                </div>
            </div>
            <h3 className='sectionMethods2'>Unleashing Hydrogen's Potential: Diverse Applications Across Sectors:</h3>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Clean Energy Production'/></h1>
            </div>
            <div className='application-content2'>
            <div className='application-imgFt5'>
                    <img src={Ap1} className="Ap1" alt='application' title="Hydrogen Clean Energy Production"/>
                </div>
                <div className='application-textFt2'>
                    <p>Hydrogen can be used as a clean energy source in fuel cells to generate electricity with only water and heat as byproducts. Fuel cells are used in various applications, including stationary power generation for buildings and remote locations, backup power systems, and portable electronics.</p>
                </div>
            </div>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Transportation'/></h1>
            </div>
            <div className='application-content2'>
                <div className='application-imgFt5'>
                    <img src={Ap2} className="Ap2" alt='application' loading="lazy" title="Hydrogen Transportation"/>
                </div>
                <div className='application-textFt2'>
                    <p>Hydrogen fuel cell vehicles (FCVs) use hydrogen as a fuel to power electric motors, offering zero-emission transportation with longer range and faster refueling compared to battery electric vehicles. Hydrogen-powered buses, trucks, trains, and even drones are being developed and deployed as part of efforts to decarbonize the transportation sector.</p>
                </div>
            </div>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Energy Storage'/></h1>
            </div>
            <div className='application-content2'>
                <div className='application-imgFt5'>
                    <img src={Ap3} className="Ap3" alt='application' loading="lazy" title="Hydrogen Energy Storage"/>
                </div>
                <div className='application-textFt2'>
                    <p>Hydrogen can store excess renewable energy generated from sources like solar and wind power through processes like electrolysis. This stored hydrogen can then be used during periods of high demand or when renewable energy generation is low, helping to balance the grid and support the integration of renewables into the energy system.</p>
                </div>
            </div>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Industrial Processes'/></h1>
            </div>
            <div className='application-content2'>
                <div className='application-imgFt5'>
                    <img src={Ap4} className="Ap4" alt='application' loading="lazy" title="Hydrogen Industrial Processes"/>
                </div>
                <div className='application-textFt2'>
                    <p>Hydrogen is widely used in various industrial processes, including petroleum refining, ammonia production for fertilizer manufacturing, methanol production, and as a reducing agent in metal refining processes. Using hydrogen as a feedstock or fuel in these processes can help reduce greenhouse gas emissions and improve overall process efficiency.</p>
                </div>
            </div>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Chemical Production'/></h1>
            </div>
            <div className='application-content2'>
                <div className='application-imgFt5'>
                    <img src={Ap5} className="Ap5" alt='application' loading="lazy" title="Hydrogen Chemical Production"/>
                </div>
                <div className='application-textFt2'>
                    <p>Hydrogen serves as a key feedstock for the production of numerous chemicals, including ammonia, methanol, hydrogen peroxide, and various organic compounds. These chemicals are essential for manufacturing processes in industries such as agriculture, pharmaceuticals, plastics, and electronics.</p>
                </div>
            </div>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Heat and Power Generation'/></h1>
            </div>
            <div className='application-content2'>
                <div className='application-imgFt5'>
                    <img src={Ap6} className="Ap6" alt='application' loading="lazy" title="Hydrogen Heat and Power Generation"/>
                </div>
                <div className='application-textFt2'>
                    <p>Hydrogen combustion can be used for heat and power generation in conventional gas turbines and internal combustion engines, offering an alternative to fossil fuels while producing minimal emissions, especially when coupled with carbon capture and storage (CCS) technologies.</p>
                </div>
            </div>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Energy Infrastructure Decarbonization'/></h1>
            </div>
            <div className='application-content2'>
                <div className='application-imgFt5'>
                    <img src={Ap7} className="Ap7" alt='application' loading="lazy" title="Hydrogen Energy Infrastructure Decarbonization"/>
                </div>
                <div className='application-textFt2'>
                    <p>Hydrogen can play a crucial role in decarbonizing existing energy infrastructure by replacing natural gas in heating systems, power plants, and industrial boilers. Blending hydrogen with natural gas or converting natural gas networks to hydrogen infrastructure are being explored as pathways to reduce carbon emissions in the heating sector.</p>
                </div>
            </div>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Space Exploration'/></h1>
            </div>
            <div className='application-content2'>
                <div className='application-imgFt5'>
                    <img src={Ap8} className="Ap8" alt='application' loading="lazy" title="Hydrogen Space Exploration"/>
                </div>
                <div className='application-textFt2'>
                    <p>Hydrogen is used as a propellant in rockets due to its high energy density and efficient combustion properties. Liquid hydrogen and liquid oxygen are commonly used as rocket propellants in space exploration missions, including satellite launches, crewed missions, and interplanetary exploration.</p>
                </div>
            </div>
            <h3 className='sectionBlue'>In summary, hydrogen's versatility as an energy carrier and chemical feedstock positions it as a key player across various sectors. From clean energy production and zero-emission transportation to industrial processes, chemical production, and even space exploration, hydrogen offers sustainable solutions that are essential for a decarbonized future. Its widespread applications highlight its potential to transform industries and drive global efforts toward cleaner and more efficient energy systems.</h3>
        </div>
    </div>
  )
}

export default Application