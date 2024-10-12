import React, { useState } from 'react'
import './Contact.css'
import ContactImg from '../Images/support.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelopeOpen, faCircleUser, faEnvelopeOpenText,} from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com';
import Alert from './Alert/Alert'
import AnimatedHeading from '../../AnimatedHeading';

const Contact = () => {
    const [SuccAlert,setSuccAlert]=useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            name,
            email,
            message,
        };

        emailjs.send('service_zgx25wh', 'template_le7o07o', templateParams, '5R7w7JO7TMVjl_L7_')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                e.target.reset();
                setName('');
                setEmail('');
                setMessage('');
                setSuccAlert(true);
                
                const timeout = setTimeout(() => {
                    setSuccAlert(false);
                }, 5000);
                
                return () => clearTimeout(timeout);
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
            });
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
                            <img src={ContactImg} alt='contact' loading="lazy" title="Smart4Technologies Support"/>
                        </div>
                        <div className='ContactEmailBnner'>
                            <div className='CircleIconEmail'>
                                <svg height="16" width="16" viewBox="0 0 512 512" fill="#30ca59">
                                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                                </svg>
                            </div>
                            <div className='LnkEmail'>
                                <h2>Email</h2>
                                <h3>Support@smart4technologies.com</h3>
                            </div>
                        </div>
                        <div className='ContactPhoneBnner'>
                            <div className='CircleIconPhone'>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#30ca59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>                          
                            </div>
                            <div className='NbrPhone'>
                                <h2>Linkedin</h2>
                                <h3>smart4technologies (S4T)</h3>
                            </div>
                        </div>
                    </div>
                    <div className='ContactForm'>
                        <span>Feel free to reach out through our inbox 📬.<br/> We're all ears and eager to connect!</span>
                        <form onSubmit={sendEmail}>
                            <div className='formName'>
                                <label htmlFor='fullName'>Full Name</label>
                                <input 
                                    type="text" 
                                    id='fullName' 
                                    name='fullname'
                                    placeholder='First Name...' 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                    autoComplete="name"
                                />
                                <FontAwesomeIcon icon={faCircleUser} className='UserIcon' />
                            </div>
                            <div className='formEmail'>
                                <label htmlFor='emailAddress'>Email Address</label>
                                <input 
                                    type="email" 
                                    id='emailAddress' 
                                    name='email' 
                                    placeholder='Email Address...' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                    autoComplete="email"
                                />
                                <FontAwesomeIcon icon={faEnvelopeOpen} className='Envolope' />
                            </div>
                            <div className='formMessage'>
                                <label htmlFor='message'>Message</label>
                                <textarea 
                                    id='message' 
                                    name='message' 
                                    placeholder='Leave me a message...' 
                                    value={message} 
                                    onChange={(e) => setMessage(e.target.value)} 
                                    required 
                                    autoComplete="off"
                                />
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