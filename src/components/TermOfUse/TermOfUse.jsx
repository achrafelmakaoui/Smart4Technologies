import React, { useEffect, useRef } from 'react'
import './TermOfUse.css'
import { gsap, Power2 } from 'gsap';
import { Link } from 'react-router-dom';

const TermOfUse = () => {
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
    <div className='termofuse'>
        <div className='termofuse-content'>
            <div className='termofuse-header'>
                <h1 ref={TextAnimation}>Terms Of Use</h1>
                <h3 ref={paraghAnimation}>Dive into transparency, trust, and a seamless partnership</h3> 
                <h3 ref={paraghAnimation2}>as we navigate this digital landscape together.</h3> 
                <h3 className='h3Mobile'>Dive into transparency, trust, and a seamless partnership as we navigate this digital landscape together.</h3>
            </div>
            <div className='termofuse-body'>
                <h3>Last updated as of September 06, 2024</h3>
                <hr/>
                <h3>Introduction</h3>
                <p>Welcome to Smart4Technologies (S4T). By accessing or using our website, including the web application calculator, you agree to comply with and be bound by these Terms of Use. If you do not agree, you must discontinue use of the site and its services.</p>
            </div>
            <div className='termofuse-body'>
                <h3>Use of the Website</h3>
                <p>ou may use the site and the web application calculator only for lawful purposes. Any misuse, such as attempting to hack, distribute malware, or disrupt the service, is strictly prohibited. You agree not to copy, distribute, or modify any part of the site’s content without our written consent.</p>
            </div>
            <div className='termofuse-body'>
                <h3>Web Application Calculator</h3>
                <p>The web application calculator is a predictive and professional tool designed to help model and optimize the hydrogen value chain. This tool can assist with both technical and economic analysis, providing insights and recommendations that support decision-making processes. While the calculator provides professional advice, it is your responsibility to verify and consider other factors before making any final decisions based on the tool’s outputs.</p>
            </div>
            <div className='termofuse-body'>
                <h3>Intellectual Property</h3>
                <p>All content on this website, including the calculator and other software tools, is the intellectual property of Smart4Technologies. Unauthorized reproduction or use of the content is prohibited.</p>
            </div>
            <div className='termofuse-body'>
                <h3>Limitation of Liability</h3>
                <p>Smart4Technologies is not liable for any loss or damage that may arise from your use of the website or the web application calculator. This includes any technical or economic losses from decisions made based on the tool’s predictions.</p>
            </div>
            <div className='termofuse-body'>
                <h3>Changes to the Terms</h3>
                <p>We reserve the right to modify these Terms of Use at any time. Continued use of the website following any changes means you accept the new terms.</p>
            </div>
            <div className='termofuse-end'>
                <div className='text-h1'><h1>Get in Touch!</h1></div>
                <div className='text-p'><p>Reach out to Smart4Technologies for expert advice on hydrogen systems and tailored support for your specific project needs.</p></div>
                <div className='text-btn'><Link to='/'>Contact Us</Link></div>
            </div>
        </div>
    </div>
  )
}

export default TermOfUse