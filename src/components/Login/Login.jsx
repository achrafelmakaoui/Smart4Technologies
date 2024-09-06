import React, { useEffect, useState } from 'react'
import './Login.css'
import client from '../Images/3.png'
import client1 from '../Images/1.png'
import client2 from '../Images/2.png'
import { SignupFormDemo } from '../SignupForm/SignupForm'
import { SigninFormDemo } from '../SigninForm/SigninForm'
import { useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { ForgetPwd } from '../ForgetPwd/ForgetPwd'

const Login = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentPage, setcurrentPage] = useState('signin');
    const location = useLocation();

    useEffect(() => {
        const page = location.pathname.split("/")[1];
        console.log(page)
        setcurrentPage(page);
    }, [location.pathname]);

    const feedbacks = [
        {
          image: client,
          name: "Alice Johnson",
          desc:'Simply extraordinary! I am extremely pleased with my exceptional projects and prosperous business. This is absolutely superb! Completely wonderful!',
          role:"Software Engineer"
        },
        {
          image: client1,
          name: "John Doe",
          desc:"Simply unbelievable! I am incredibly satisfied with my amazing projects and thriving business. This is absolutely and truly wonderful! I couldn’t be happier!",
          role:"Product Manager"
        },
        {
          image: client2,
          name: "Jane Smith",
          desc:'Simply remarkable! I am genuinely thrilled with my successful projects and growing business. This is absolutely incredible! Truly fantastic!',
          role:"UX Designer"
        }
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % feedbacks.length);
        }, 6000);
        return () => clearInterval(intervalId);
    }, [currentSlide, feedbacks.length]);

    const currentSlideInc = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % feedbacks.length);
    }
    
    const currentSlideDec = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + feedbacks.length) % feedbacks.length);
    }

    return (
        <div className='login'>
            <div className='login-content'>
                <div className='login-intro-content'>
                    <div className='intro-content-header'>
                        <h3>Smart4Technologies</h3>
                    </div>
                    <div className='intro-content-center'>
                        <h1>Start your <br/> journey with us.</h1>
                        <h3>Discover the world's best community of freelancers and business owners.</h3>
                    </div>
                    <div className='intro-content-footer'>
                        {feedbacks.map((feedback, index) => (
                            <div key={index}
                                className={`content-footer-container ${index === currentSlide ? "active" : ""}`}
                            >
                                <div className='content-footer-sub1'>
                                    <h3>{feedback.desc}</h3>
                                </div>
                                <div className='content-footer-sub2'>
                                    <div className='content-footer-subItem1'>
                                        <img src={feedback.image} alt='client-img'/>
                                    </div>
                                    <div className='content-footer-subItem2'>
                                        <span>{feedback.name}</span>
                                        <span>{feedback.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="dots">
                            <div className='SvgOne'>
                                <svg onClick={currentSlideDec} width="21" height="34" viewBox="0 0 106 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M96 172L100.75 171.25L103 170.75L105.25 170.25C96.75 123.5 70.75 101.5 47.5 90.75V81.25C71.75 70.75 98 48.25 105.5 1.5L100.75 0.75L98.25 0.25L96 0C84.75 71.75 31.75 80.75 10.75 81.25C6.25 81.25 2.25 81.25 0.75 81.25V83.75V86.75V90.75C0.75 90.75 2.25 90.75 4.5 90.75H10.75C31.75 90.75 83.5 102.25 96 172Z" fill="white"/>
                                </svg>
                            </div>
                            <div className='svgsHr'>
                                <hr/>
                            </div>
                            <div className='SvgTwo'>
                                <svg onClick={currentSlideInc} width="21" height="34" viewBox="0 0 106 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.25 0L5.5 0.75L3.25 1.25L1 1.75C9.5 48.5 35.5 70.5 58.75 81.25V90.75C34.5 101.25 8.25 123.75 0.75 170.5L5.5 171.25L8 171.75L10.25 172C21.5 100.25 74.5 91.25 95.5 90.75C100 90.75 104 90.75 105.5 90.75V88.25V85.25V81.25C105.5 81.25 104 81.25 101.75 81.25H95.5C74.5 81.25 22.75 69.75 10.25 0Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='login-form-content'>
                    {currentPage === 'signin' && <motion.div style={{width:'100%'}} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2, ease: [0, 0.71, 0.2, 1.01]}}><SigninFormDemo/></motion.div>}
                    {currentPage === 'signup' && <motion.div style={{width:'100%'}} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2, ease: [0, 0.71, 0.2, 1.01]}}><SignupFormDemo/></motion.div>}
                    {currentPage === 'password_reset' && <motion.div style={{width:'100%'}} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2, ease: [0, 0.71, 0.2, 1.01]}}><ForgetPwd/></motion.div>}
                </div>
            </div>
        </div>
    )
}

export default Login;
