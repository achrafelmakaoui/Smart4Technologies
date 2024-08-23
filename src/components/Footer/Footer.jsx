import React from 'react'
import './Footer.css'
import AdbLogo from '../Images/S4TB.png'
import AdbWLogo from '../Images/S4TW.png'
import { useTheme } from '../../ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();


  return (
    <div className='footer'>
      <div className='footer-content'>
        <hr/>
        <div className='footer-items'>
            <div className='footer-item-1'>
                {theme==='light' &&
                    <>
                        <img src={AdbLogo} alt="S4T-LOGO"/>
                    </>
                }
                {theme==='dark' &&
                    <>
                        <img src={AdbWLogo} alt="S4T-LOGO"/>
                    </>
                }
            </div>
            <div className='footer-item-2'>
                <span>About Us</span>
                <span>Home</span>
                <span>Services</span>
                <span>Calculator</span>
            </div>
            <div className='footer-item-3'>
                <span>Legal</span>
                <span>Term of use</span>
                <span>Privacy policy</span>
            </div>
            <div className='footer-item-4'>
                <span>Help</span>
                <span>Contact us</span>
                <span>FAQ</span>
            </div>
        </div>
        <p>© Smart4Technologies, All rights resereved.</p>
      </div>
    </div>
  )
}

export default Footer
