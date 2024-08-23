import React, { useEffect, useRef } from 'react'
import './LandPage.css'
import Navbar from '../Navbar/Navbar'
import { gsap, Power2, Back } from 'gsap';
import SplitText from "gsap-trial/SplitText"
import Hydrogen from '../Images/HYDROGENT.png'
import ParticlesComponent from './Particles';
import { Link } from 'react-router-dom';

const LandPage = () => {
    const TextAnimation = useRef();
    const ImgAnimation = useRef();
    const Img2Animation = useRef();
    const paraghAnimation = useRef();
    const iconsAnimation = useRef();
    const iconsAnimation2 = useRef();
    gsap.registerPlugin(SplitText);
    useEffect(() => {
        const tl = gsap.timeline();
    
        // Use SplitText to split the text
        const splitText = new SplitText(TextAnimation.current, { type: 'lines,chars', linesClass: 'line', charsClass: 'char' });
    
        // Text Animation
        tl.staggerFromTo(
            splitText.lines,
            1.2,
            { yPercent: 130, ease: Back.easeOut },
            { yPercent: 0, ease: Back.easeOut },
            0.2
        );
    
        tl.staggerFromTo(
            splitText.chars,
            0.6,
            { opacity: 0, y: 20, ease: Power2.easeInOut },
            { opacity: 1, y: 0, ease: Power2.easeInOut },
            0.02,
            '-=1.2'
        );
    
        // Wave Animation with a delay after text animation
        tl.fromTo(
            paraghAnimation.current,
            0.5,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=0.6'
        );
        tl.fromTo(
            iconsAnimation.current,
            0.5,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=0.4'
        );
        tl.fromTo(
            iconsAnimation2.current,
            0.5,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=0.4'
        );
        tl.fromTo(ImgAnimation.current, 0.5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, '-=0.5');
        tl.fromTo(Img2Animation.current, 0.6, { opacity: 0, y:60 }, { opacity: 1, y:0, ease: Power2.easeInOut }, '-=0.0');
    }, []);

  return (
    <section className="home" id="Home">
        <Navbar/>
        <ParticlesComponent/>
        <div className='container'>
            <div className='hero-main'>
                <div className='hero-text'>
                    <h1 ref={TextAnimation}>Optimize Hydrogen Systems</h1>
                    <p ref={paraghAnimation}>Smart4Technologies delivers cutting-edge software for planning, modeling, and enhancing hydrogen system value chains globally. Utilizing reliable data from diverse energy inputs and renewable sources, our solution is tailored for academic experts, consultants, business strategists, project developers, and engineers.</p>
                    <span ref={iconsAnimation}>
                        <Link to='/signin'>Get started <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></Link>
                        <a>See Demo <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg></a>
                    </span>
                    <div className='hero-analis' ref={iconsAnimation2}>
                        <div className='hero-analis-st'>
                            <div className='cl1'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className='cl2'>
                                <span>3500+</span>
                                <span>Stasfied users</span>
                            </div>
                        </div>
                        <div className='hero-analis-sd'>
                            <div className='cl1'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                    <polyline points="17 6 23 6 23 12"></polyline>
                                </svg>
                            </div>
                            <div className='cl2'>
                                <span>250K+</span>
                                <span>Successful transactions</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hero-img' ref={ImgAnimation}>
                    <div className='hero-img-st-row'>
                        <div className='hero-img-banner'>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2">
                                    <line x1="18" y1="20" x2="18" y2="10"></line>
                                    <line x1="12" y1="20" x2="12" y2="4"></line>
                                    <line x1="6" y1="20" x2="6" y2="14"></line>
                                </svg>
                            </span>
                            <span>Total Balance</span>
                            <span>$435,15</span>
                            <span><a>+8,86%</a></span>
                        </div>
                    </div>
                </div>
                <div className='hero-img-sd-row' ref={Img2Animation}>
                    <img src={Hydrogen} alt='Hedrogen'/>
                </div>
            </div>
        </div>
    </section>

  )
}

export default LandPage