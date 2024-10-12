import React, { useEffect, useRef } from 'react'
import './LandPage.css'
import { gsap, Power2 } from 'gsap';
import { Link } from 'react-router-dom';

const LandPage = () => {
    const TextAnimation = useRef();
    const ImgAnimation = useRef();
    const Img2Animation = useRef();
    const paraghAnimation = useRef();
    const iconsAnimation = useRef();
    const iconsAnimation2 = useRef();


    useEffect(() => {
        const tl = gsap.timeline();
 
        tl.fromTo(
            TextAnimation.current,
            1,
            { opacity: 0, yPercent: 20, ease: Power2.easeInOut },
            { opacity: 1, yPercent: 0, ease: Power2.easeInOut },
            0.02,
            '-=1'
        );
    
        // Wave Animation with a delay after text animation
        tl.fromTo(
            paraghAnimation.current,
            0.5,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=0.5'
        );
        tl.fromTo(
            iconsAnimation.current,
            0.5,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=0.5'
        );
        tl.fromTo(
            iconsAnimation2.current,
            0.5,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=0.5'
        );
        tl.fromTo(ImgAnimation.current, 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, '-=1.6');
        tl.fromTo(Img2Animation.current, 1, { opacity: 0, y:60 }, { opacity: 1, y:0, ease: Power2.easeInOut }, '-=1.6');
    }, []);

  return (
    <section className="home" id="Home">
        <div className='container'>
            <div className='hero-main'>
                <div className='hero-text'>
                    <h1 ref={TextAnimation}>Optimize Hydrogen Systems</h1>
                    <p ref={paraghAnimation}>Smart4Technologies delivers cutting-edge software for planning, modeling, and enhancing hydrogen system value chains globally. Utilizing reliable data from diverse energy inputs and renewable sources, our solution is tailored for academic experts, consultants, business strategists, project developers, and engineers.</p>
                    <span ref={iconsAnimation}>
                        <Link>Get started <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></Link>
                        <Link>See Demo <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg></Link>
                    </span>
                    <div className='hero-analis' ref={iconsAnimation2}>
                        <div className='hero-analis-st'>
                            <div className='cl1'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                            </div>
                            <div className='cl2'>
                                <span>15+</span>
                                <span>Trusted company</span>
                            </div>
                        </div>
                        <div className='hero-analis-sd'>
                            <div className='cl1'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                    <polyline points="17 6 23 6 23 12"></polyline>
                                </svg>
                            </div>
                            <div className='cl2'>
                                <span>10+</span>
                                <span>Years experience</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hero-img' ref={ImgAnimation}>
                    <div className="hero-img-sd-row" ref={Img2Animation}>
                        <div className="ratingText">
                            <span>AVERAGE RATING OF ALL THE PROJECTS WE HAVE WORKED ON</span>
                        </div>
                        <div className="ratingPoint">
                            <span>4.8</span>
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="#FFD700" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default LandPage