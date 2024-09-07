import React, { useEffect, useRef } from 'react'
import './PrivacyPolicy.css'
import { gsap, Power2, Back } from 'gsap';
import SplitText from "gsap-trial/SplitText"

const PrivacyPolicy = () => {
    const TextAnimation = useRef();
    const paraghAnimation = useRef();
    const paraghAnimation2 = useRef();
    gsap.registerPlugin(SplitText);

    useEffect(() => {
        const tl = gsap.timeline();

        const splitText = new SplitText(TextAnimation.current, { type: 'lines,chars', linesClass: 'line', charsClass: 'char' });

        tl.staggerFromTo(
            splitText.lines,
            1.5,
            { yPercent: 130, ease: Back.easeOut },
            { yPercent: 0, ease: Back.easeOut },
            0.5
        );
    
        tl.staggerFromTo(
            splitText.chars,
            0.5,
            { opacity: 0, y: 50, ease: Power2.easeInOut },
            { opacity: 1, y: 0, ease: Power2.easeInOut },
            0.02,
            '-=1.5'
        );

        tl.fromTo(
            paraghAnimation.current,
            0.8,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=1.2'
        );
        tl.fromTo(
            paraghAnimation2.current,
            0.8,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=1'
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
                <h3>Services</h3>
                <p>wecraft offers a range of design services, including but not limited to graphic design, web design, branding, and illustration.The Company will provide the agreed-upon services with professionalism and expertise, following industry standards and best practices. The specific details, deliverables, timelines, and pricing for each project will be</p>
            </div>
            <div className='privacyPolicy-end'>
                
            </div>
        </div>
    </div>
  )
}

export default PrivacyPolicy