import React from 'react'
import './Sources.css'
import AnimatedHeading from '../../AnimatedHeading';
import GrH2 from '../Images/greyhydrogen.png'
import BlH2 from '../Images/bluehydro.jpg'
import GrDef from '../Images/greydef.jpg'
import Method1 from '../Images/M1.png'
import Method2 from '../Images/M2.png'
import Method3 from '../Images/M3.png'
import B1 from '../Images/B1.png'
import B2 from '../Images/B2.png'
import B3 from '../Images/B3.png'
import GreenH2 from '../Images/GreenH2.jpg'

const Sources = () => {
  return (
    <div className='sources-section'>
        <div className='sourcesContainer'>
            <div className='sources-content'>
                <h3>
                    <AnimatedHeading text='Sources'/>
                </h3>
                <h4>
                    <AnimatedHeading text='Credible References for Understanding Hydrogen Sources'/>
                </h4>
            </div>
            <div className='sources-contentheader'>
                <div className='sources-imgFt'>
                    <img src={GrH2} className="GrH2" alt='sources' loading="lazy" title="Grey Hydrogen"/>
                </div>
                <div className='sources-textFt'>
                    <h1><AnimatedHeading text='Grey'/></h1>
                    <h1><AnimatedHeading text='Hydrogen'/></h1>
                </div>
            </div>
            <div className='sources-content2'>
                <div className='sources-textFt2'>
                    <p>The term "grey hydrogen" refers to hydrogen produced from conventional methods such as steam methane reforming, without carbon capture and storage (CCS). When methane is used as the feedstock for hydrogen production through steam reforming, the process generates hydrogen and CO2. If the emitted CO2 is not captured and stored, the produced hydrogen is termed "grey hydrogen." This term is used to distinguish this type of hydrogen from more environmentally friendly variants, such as "blue" hydrogen (where CO2 is captured and stored) and "green" hydrogen (produced by electrolysis of water using renewable electricity). Grey hydrogen widely used in many industrial sectors, but it is increasingly subject to regulatory and social pressures to reduce the CO2 emissions associated with its production. This is driving the development of CO2 capture and storage technologies as well as the transition to more environmentally friendly hydrogen production methods.</p>
                </div>
                <div className='sources-imgFt2'>
                    <img src={GrDef} className="GrDef" alt='sources' loading="lazy" title="Grey Hydrogen"/>
                </div>
            </div>
            <h3 className='sectionMethods'>Let's dive into the key hydrogen production methods:</h3>
            <div className='sources-content2'>
                <div className='sources-imgFt3'>
                    <img src={Method1} className="Method1" alt='sources' loading="lazy" title="Steam reforming"/>
                </div>
                <div className='sources-textFt2'>
                    <p>Steam reforming: A chemical process where methane (CH4) is combined with steam (H2O) at high temperature and pressure, catalyzed by a reforming catalyst, to produce hydrogen (H2) and carbon monoxide (CO). It is the most commonly used method for industrial hydrogen production.</p>
                </div>
            </div>
            <div className='sources-content2'>
                <div className='sources-imgFt4'>
                    <img src={Method2} className="Method2" alt='sources' loading="lazy" title="Partial oxidation"/>
                </div>
                <div className='sources-textFt2'>
                    <p>Partial oxidation: This process involves the incomplete combustion of a hydrocarbon fuel, such as methane or coal, in the presence of a limited amount of oxygen. It produces hydrogen, carbon monoxide, and heat.</p>
                </div>
            </div>
            <div className='sources-content2'>
                <div className='sources-imgFt5'>
                    <img src={Method3} className="Method3" alt='sources' loading="lazy" title="Gasification"/>
                </div>
                <div className='sources-textFt2'>
                    <p>Gasification: This is the process of converting biomass, coal, or other organic materials into a synthesis gas primarily composed of hydrogen (H2), carbon monoxide (CO), and carbon dioxide (CO2), using steam and oxygen or air.</p>
                </div>
            </div>
            <h3 className='sectionMethods'>Tech Showdown: Comparing the Best Innovations:</h3>
            <table className='greyHydro-table' border={1} >
                <tr className='trHead'>
                    <th>Technology</th>                        
                    <th>Raw material used</th>
                    <th>Maturity</th>
                    <th>Yield</th>
                    <th>CO2 Emissions</th>
                </tr>
                <tr>
                    <td>Steam reforming</td>                        
                    <td>Methane, petroleum derivatives…</td>
                    <td>+++</td>
                    <td>72 à 82 %</td>
                    <td>9 to 13 (less than 5 if CCS)</td>
                </tr>
                <tr>
                    <td>Partial oxidation</td>                        
                    <td>Petroleum derivatives…</td>
                    <td>+++</td>
                    <td>53 à 67 %</td>
                    <td>13 to 18 (less than 5 if CCS)</td>
                </tr>
                <tr>
                    <td>Gasification</td>                        
                    <td>Coal</td>
                    <td>+++</td>
                    <td>50 à 70 %</td>
                    <td>20 (open pit mines) 24 (underground mines) (less if CCS)</td>
                </tr>
            </table>
            <div className='blueHydro'>
                <h1><AnimatedHeading text='Blue Hydrogen'/></h1>
                <hr className='blueHydro-hr'/>
            </div>
            <div className='sources-content2'>
                <div className='sources-textFt2'>
                    <p>The concept of "blue hydrogen" refers to hydrogen produced from traditional methods such as steam methane reforming, partial oxidation, or gasification, but with the capture and storage of CO2 (CCS - Carbon Capture and Storage). When methane is used to produce hydrogen through steam reforming, it generates both hydrogen and CO2. However, in the context of "blue hydrogen," the emitted CO2 is captured and safely stored rather than being released into the atmosphere. Hydrogen capture refers to the process of separating hydrogen from a gas mixture in order to concentrate and purify it. This technology is employed in various contexts, including hydrogen production from primary sources such as natural gas or biomass, as well as in hydrogen recycling in applications such as oil refining or chemical production.</p>
                </div>
                <div className='sources-imgFt2'>
                    <img src={BlH2} className="BlH2" alt='sources' loading="lazy" title="Blue Hydrogen"/>
                </div>
            </div>
            <h3 className='sectionMethods'>Cool hydrogen capture methods:</h3>
            <div className='sources-content2'>
                <div className='sources-imgFt3'>
                    <img src={B1} className="Method1" alt='sources' loading="lazy" title="Adsorption"/>
                </div>
                <div className='sources-textFt2'>
                    <p>Adsorption: Hydrogen is adsorbed onto a solid surface, such as activated carbon or polymer materials, and then desorbed using pressure or temperature changes.</p>
                </div>
            </div>
            <div className='sources-content2'>
                <div className='sources-imgFt4'>
                    <img src={B2} className="Method2" alt='sources' loading="lazy" title="Selective compression"/>
                </div>
                <div className='sources-textFt2'>
                    <p>Selective compression: Hydrogen is compressed at high pressures to separate it from other gases.</p>
                </div>
            </div>
            <div className='sources-content2'>
                <div className='sources-imgFt5'>
                    <img src={B3} className="Method3" alt='sources' loading="lazy" title="Membrane permeation"/>
                </div>
                <div className='sources-textFt2'>
                    <p>Membrane permeation: Selective membranes allow the selective passage of hydrogen through them, thereby separating hydrogen from other gases present.</p>
                </div>
            </div>
            <h3 className='sectionBlue'>Unlike green hydrogen, which is produced from renewable energy sources, blue hydrogen is considered more affordable across all scenarios and is the only type of hydrogen that directly reduces CO2 emissions. It remains cheaper than green hydrogen and is seen as a more accessible alternative for reducing CO2 emissions.</h3>
            <div className='GreenHydro'>
                <hr className='greenHydro-hr'/>
                <h1><AnimatedHeading text='Green Hydrogen'/></h1>
            </div>
            <div className='sources-content2'>
                <div className='sources-textFt2'>
                    <p>Green hydrogen, created through water electrolysis powered by renewable energy sources such as solar, wind, hydro, and tidal, is pivotal to the transition towards a low-carbon economy. This process, which produces hydrogen and oxygen without emitting CO2, stands out from grey and blue hydrogen, which rely on fossil fuels and contribute to greenhouse gas emissions. Green hydrogen is increasingly seen as essential for various clean energy applications, including energy storage, hydrogen vehicles, and sustainable industrial processes, playing a critical role in reducing global greenhouse gas emissions and advancing environmental sustainability. Countries like Morocco are investing in green hydrogen, ammonia, and methanol industries to lead the global green energy market. These efforts promote innovation, job creation, and sustainable economic growth, while advancing climate change mitigation and ensuring a cleaner, resilient global economy.</p>
                </div>
                <div className='sources-imgFt2'>
                    <img src={GreenH2} className="GreenH2" alt='sources' loading="lazy" title="Green Hydrogen"/>
                </div>
            </div>
            <table className='greyHydro-table' style={{marginTop:'5rem'}} border={1} >
                <tr className='trHead'>
                    <th>Technology</th>                        
                    <th>Raw material used</th>
                    <th>Maturity</th>
                    <th>Yield</th>
                    <th>CO2 Emissions</th>
                </tr>
                <tr>
                    <td>Electrolyse</td>                        
                    <td>Water + Electricity</td>
                    <td>+</td>
                    <td>70% (up to 85% for SPEC)</td>
                    <td>Depends on the origin of the electricity used, low if ENR or nuclear</td>
                </tr>
            </table>
            <h3 className='sectionRef'>Reference table: <span onClick={() => { window.open('https://www.senat.fr/rap/r20-536/r20-5361.pdf', '_blank')}}>View Details</span></h3>
        </div>
    </div>
  )
}

export default Sources