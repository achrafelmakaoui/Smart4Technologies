import React from 'react'
import './Footer.css'
import AdbLogo from '../Images/S4TB.png'
import AdbWLogo from '../Images/S4TW.png'
import { useTheme } from '../../ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();


  return (
    <footer className="footer">
        
        <div className="footer-container">
            <hr className='footrt-hr'/>
            <div className="footer-content">
                <div className="footer-col1">
                    <h4>Smart4Technologies</h4>
                    <p>Smart4Technologies (S4T) delivers cutting-edge software solutions, revolutionizing hydrogen system planning and modeling. Our technology empowers global experts to optimize energy strategies with precision.</p>
                </div>
                <div className="footer-col2">
                    <h4>Useful links</h4>
                    <ul>
                        <li><a href='/#Home' className='link'>Home</a></li>
                        <li><a href='/#Services' className='link'>Service</a></li>
                        <li><a href='/#Calculator' className='link'>Calculator</a></li>
                        <li><a href='/#Contact' className='link'>Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col3">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href='/#' className='link'>Term of use</a></li>
                        <li><a href='/#' className='link'>Privacy policy</a></li>   
                        <li><a href='/#About' className='link'>About Us</a></li>   
                    </ul>
                </div>
                <div className="footer-col4">
                    <h4>Subscribe</h4>
                    <div className="social-links">
                        <a href='/#' onClick={() => { window.open('', '_blank')}} >
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#30ca59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg> 
                        </a>
                        <a href='/#' onClick={() => { window.open('', '_blank')}} >
                            <svg height="19" width="19" viewBox="0 0 512 512" fill="#30ca59">
                                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                            </svg>
                        </a>
                        <a href='/#' onClick={() => { window.open('', '_blank')}} >
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#30ca59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <p className="copyright">© 2024 All Rights Reserved By Smart4Technologies ©</p>
    </footer>
  )
}

export default Footer
