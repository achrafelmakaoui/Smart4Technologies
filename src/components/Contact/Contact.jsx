import React, { useRef, useState } from 'react'
import './Contact.css'
import ContactImg from '../Images/contact.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelopeOpen, faCircleUser, faEnvelopeOpenText,} from '@fortawesome/free-solid-svg-icons'
// import emailjs from '@emailjs/browser';
import Alert from './Alert/Alert'
import AnimatedHeading from '../../AnimatedHeading';

const Contact = () => {
    const [SuccAlert,setSuccAlert]=useState(false);
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccAlert(true);
    setTimeout(() => {
        setSuccAlert(false);
    }, 5000);
  };

  const handleClickXMarkAlert = () => {
    setSuccAlert(false)
  } 

  return (
    <section className="contact" id="Contact">
        <div className="ContactContainer">
            <div className="contact-content">
                <h3><AnimatedHeading text='Contact Us'/></h3>
                <h4><AnimatedHeading text="Don't be shy! Reach out to us! 👇"/></h4>
            </div>
            <div className='Contact-desFor'>
                <div className='Contact-Items'>
                    <div className='ContactImg'>
                        <div className='ContactImgBnner'>
                            <img src={ContactImg} alt='cnt' />
                        </div>
                        <div className='ContactEmailBnner'>
                            <div className='CircleIconEmail'>
                                <svg height="16" width="16" viewBox="0 0 512 512" fill="#30ca59">
                                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                                </svg>
                            </div>
                            <div className='LnkEmail'>
                                <h2>Email</h2>
                                <h4>smart4technologies@gmail.com</h4>
                            </div>
                        </div>
                        <div className='ContactPhoneBnner'>
                            <div className='CircleIconPhone'>
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#30ca59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call">
                                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>                          
                            </div>
                            <div className='NbrPhone'>
                                <h2>Phone</h2>
                                <h4>+212 6 26 62 73 78</h4>
                            </div>
                        </div>
                    </div>
                    <div className='ContactForm'>
                        <h4>Feel free to reach out through our inbox 📬.<br/> We're all ears and eager to connect!</h4>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='formName'>
                                <label>First Name</label>
                                <input type="text" placeholder='First Name...' name="user_name" required/>
                                <FontAwesomeIcon icon={faCircleUser} className='UserIcon' />
                            </div>
                            <div className='formEmail'>
                                <label>Email Address</label>
                                <input type="email" placeholder='Email Addres...' name="user_email" required/>
                                <FontAwesomeIcon icon={faEnvelopeOpen} className='Envolope' />
                            </div>
                            <div className='formMessage'>
                                <label>Message</label>
                                <textarea placeholder='Leave me a message...' name="message" required/>
                                <FontAwesomeIcon icon={faEnvelopeOpenText} className='EnvelopeText' />
                            </div>
                            <button type='submit'>
                                <FontAwesomeIcon icon={faPaperPlane} className='paperEmail' />
                                Get In Touch
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {SuccAlert && <Alert handleClose={handleClickXMarkAlert}/>}
    </section>
  )
}

export default Contact