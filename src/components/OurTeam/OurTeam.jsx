import React from 'react'
import './OurTeam.css'
import AnimatedHeading from '../../AnimatedHeading';
import TeamMember1 from '../Images/TeamMember1.png'
import TeamMember2 from '../Images/TeamMember2.png'
import TeamMember3 from '../Images/TeamMember3.png'
import TeamMember4 from '../Images/TeamMember4.jpg'
import TeamMember5 from '../Images/TeamMember5.jpg'
import { Link } from 'react-router-dom';
const OurTeam = () => {
  return (
    <div className='ourTeam'>
        <div className='ourTeam-content'>
            <div className='ourTeam-header'>
                <h3 className='ourTeam-Title'>
                    <AnimatedHeading text='our team'/>
                </h3>
                <h1>
                    <AnimatedHeading text='Working with leading experts'/>
                </h1>
                <h3 className='normalH3'>
                    <AnimatedHeading text='Across the hydrogen production industry.'/>
                </h3> 
            </div>
            <div className='ourTeam-cards'>
                <div className='TeamMember1'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={TeamMember1} alt='Mourad Nachtane'/>
                        </div>
                        <div className='insideImage'>
                            <div className='LinkeedInIcon'>
                                <Link aria-label="Visit our LinkedIn profile"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
                            </div>
                            <div className='TeamMember-Name'>
                                <h1>Mourad Nachtane</h1>
                                <h3>S4T CEO</h3>
                            </div>
                        </div>
                        <div className="banner">
                            <div className='bnr'>
                                <div className="title"><h1>Mourad Nachtane</h1></div>
                                <div className="subtitle"><h3>S4T CEO</h3></div>
                                <div className="linkedIn-Icon"> 
                                    <Link aria-label="Visit our LinkedIn profile"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
                                </div>
                                <div className="description">
                                    <p>Mourad NACHTANE, PhD in Mechanical Engineering and Energy Systems, is the CEO of Smart4Technologies (S4T). With 10 years of proven renewable energy experience, he leads hydrogen system optimization, advancing S4T's mission as a key player in sustainable energy solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={TeamMember2} alt='Khaoula Adeli'/>
                        </div>
                        <div className='insideImage'>
                            <div className='LinkeedInIcon'>
                                <Link aria-label="Visit our LinkedIn profile"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
                            </div>
                            <div className='TeamMember-Name'>
                                <h1>Khaoula Adeli</h1>
                                <h3>S4T Researcher</h3>
                            </div>
                        </div>
                        <div className="banner">
                            <div className='bnr'>
                                <div className="title"><h1>Khaoula Adeli</h1></div>
                                <div className="subtitle"><h3>S4T Researcher</h3></div>
                                <div className="linkedIn-Icon"> 
                                    <Link aria-label="Visit our LinkedIn profile"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
                                </div>
                                <div className="description">
                                    <p>Khaoula Adeli, a researcher at Smart4Technologies (S4T), specializes in renewable energy and hydrogen. She integrates solar and wind energy with AI, leading projects on hydrogen optimization, hybrid systems, and identifying renewable energy sites in Morocco.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={TeamMember3} alt='Abdelilah Zaari'/>
                        </div>
                        <div className='insideImage'>
                            <div className='LinkeedInIcon'>
                                <Link aria-label="Visit our LinkedIn profile"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
                            </div>
                            <div className='TeamMember-Name'>
                                <h1>Abdelilah Zaari</h1>
                                <h3>Project Manager</h3>
                            </div>
                        </div>
                        <div className="banner">
                            <div className='bnr'>
                                <div className="title"><h1>Abdelilah Zaari</h1></div>
                                <div className="subtitle"><h3>Project Manager</h3></div>
                                <div className="linkedIn-Icon"> 
                                    <Link aria-label="Visit our LinkedIn profile"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
                                </div>
                                <div className="description">
                                    <p>Abdelilah Zaari, a Computer Engineering expert, is the technical lead at Smart4Technologies (S4T) and project manager for the S4T application. His extensive expertise shapes innovative hydrogen system technologies, positioning S4T as a leader in sustainable energy solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={TeamMember4} alt='Abd. Ait El Mouddene'/>
                        </div>
                        <div className='insideImage'>
                            <div className='LinkeedInIcon'>
                                <Link aria-label="Visit our LinkedIn profile"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
                            </div>
                            <div className='TeamMember-Name'>
                                <h1>Abd. Ait El Mouddene</h1>
                                <h3>Data & IoT Expert.</h3>
                            </div>
                        </div>
                        <div className="banner">
                            <div className='bnr'>
                                <div className="title"><h1>Abd. Ait El Mouddene</h1></div>
                                <div className="subtitle"><h3>Data & IoT Expert.</h3></div>
                                <div className="linkedIn-Icon"> 
                                    <Link aria-label="Visit our LinkedIn profile"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
                                </div>
                                <div className="description">
                                    <p>Abderrahmane Ait El Mouddene is a Big Data and IoT specialist and master's student at ENSAM Casablanca. With expertise in data science and backend development, he creates innovative software solutions that transform data into actionable insights for sustainable impact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={TeamMember5} alt='Achraf El Makaoui'/>
                        </div>
                        <div className='insideImage'>
                            <div className='LinkeedInIcon'>
                                <Link aria-label="Visit our LinkedIn profile"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
                            </div>
                            <div className='TeamMember-Name'>
                                <h1>Achraf El Makaoui</h1>
                                <h3>Frontend Developer</h3>
                            </div>
                        </div>
                        <div className="banner">
                            <div className='bnr'>
                                <div className="title"><h1>Achraf El Makaoui</h1></div>
                                <div className="subtitle"><h3>Frontend Developer</h3></div>
                                <div className="linkedIn-Icon"> 
                                    <Link aria-label="Visit our LinkedIn profile"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
                                </div>
                                <div className="description">
                                    <p>Achraf El Makaoui is a frontend expert developer who created the Smart4Technologies (S4T) website and application interfaces. His skills in web development and design contribute to delivering seamless user experiences and enhancing the overall functionality of S4T’s digital platforms.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='privacyPolicy-end'>
                <div className='text-h1'><h1>Get in Touch!</h1></div>
                <div className='text-p'><p>Reach out to Smart4Technologies for expert advice on hydrogen systems and tailored support for your specific project needs.</p></div>
                <div className='text-btn'><Link aria-label="Navigate to Contact page" to='/'>Contact Us</Link></div>
            </div>
        </div>
    </div>
  )
}

export default OurTeam