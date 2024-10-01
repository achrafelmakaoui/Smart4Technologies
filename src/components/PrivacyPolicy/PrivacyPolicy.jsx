import React, { useEffect, useRef } from 'react'
import './PrivacyPolicy.css'
import { gsap, Power2 } from 'gsap';

const PrivacyPolicy = () => {
    const TextAnimation = useRef();
    const paraghAnimation = useRef();
    const paraghAnimation2 = useRef();

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            TextAnimation.current,
            0.8,
            { opacity: 0, yPercent: 30, ease: Power2.easeInOut },
            { opacity: 1, yPercent: 0, ease: Power2.easeInOut },
            0.02,
            '-=1.2'
        );

        tl.fromTo(
            paraghAnimation.current,
            0.8,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=0.8'
        );
        tl.fromTo(
            paraghAnimation2.current,
            0.8,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=0.6'
        );
    }, []);

  return (
    <div className='privacyPolicy'>
        <div className='privacyPolicy-content'>
            <div className='privacyPolicy-header'>
                <h1 ref={TextAnimation}>Privacy Policy</h1>
                <h3 ref={paraghAnimation}>Learn about the data we collect, how we use it and the measures </h3> 
                <h3 ref={paraghAnimation2}>we take to protect your personal information.</h3> 
            </div>
            <div className='privacyPolicy-body'>
                <h3>Last updated as of September 06, 2024</h3>
                <hr/>
                <h3>Introduction</h3>
                <p>At Smart4Technologies (S4T), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect any information that you provide while using our website.</p>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Information We Collect</h3>
                <p>We may collect the following types of information: Personal Information: Name, email address, company, or other details you provide when contacting us or using certain features like our web application calculator. Usage Data: Information about how you interact with our website (e.g., IP address, browser type, pages viewed).</p>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Use of Information</h3>
                <p>We use the collected information to: Provide, improve, and customize our services. Respond to inquiries or support requests. Analyze website performance to enhance user experience.</p>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Cookies</h3>
                <p>We use cookies to gather data on how users interact with our site. You can adjust your browser settings to block cookies, but this may impact your experience with certain features of our site.</p>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Sharing of Information</h3>
                <p>We do not sell, trade, or share your personal information with third parties, except as necessary to operate the site or when required by law.</p>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Data Security</h3>
                <p>We implement appropriate technical and organizational measures to protect your information from unauthorized access, loss, or misuse.</p>
            </div>
            <div className='privacyPolicy-body'>
                <h3>Data Security</h3>
                <p>We implement appropriate technical and organizational measures to protect your information from unauthorized access, loss, or misuse.</p>
            </div>
            <div className='privacyPolicy-end'>
                
            </div>
        </div>
    </div>
  )
}

export default PrivacyPolicy