import React, { useState } from 'react';
import './Faq.css'; // Assuming you keep the CSS in a separate file
import ChevronUpW from '../Assets/chevron-up.svg'
import ChevronDownW from '../Assets/chevron-down.svg'
import ChevronUpB from '../Assets/chevron-up-dark.svg'
import ChevronDownB from '../Assets/chevron-down-dark.svg'
import { useTheme } from '../../ThemeContext';
import AnimatedHeading from '../../AnimatedHeading';

const FaqAccordion = () => {
  const { theme, toggleTheme } = useTheme();

  // State to track which FAQ item is open
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqData = [
    {
      question: 'What is Frontend Mentor, and how will it help me?',
      answer: `Frontend Mentor offers realistic coding challenges to help developers improve their
               frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
               all levels and ideal for portfolio building.`,
    },
    {
      question: 'Is Frontend Mentor free?',
      answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free
               option providing access to a range of projects suitable for all skill levels.`,
    },
    {
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
               way to showcase your skills to potential employers!`,
    },
    {
      question: `How can I get help if I'm stuck on a Frontend Mentor challenge?`,
      answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help
               channel where you can ask questions and seek support from other community members.`,
    },
    {
        question: `How can I get help if I'm stuck on a Frontend Mentor challenge?`,
        answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help
                 channel where you can ask questions and seek support from other community members.`,
    },
  ];

  return (
    <div className='faq'>
        <div className="faq-container">
          <h3 className='faqh3'>
              <AnimatedHeading text='FAQ'/>
          </h3>
          <h4 className='faqh4'>
              <AnimatedHeading text="Got Questions? We've Got Answers! 👇"/>
          </h4>
            {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                    <h2 className="question" onClick={() => toggleFaq(index)} data-faq={index + 1}>
                        {item.question}
                        
                        {theme==='light' &&
                            <>
                                <img src={ChevronDownW} alt="icon-down" className="icon-plus" style={{ display: openFaq === index ? 'inline-block' : 'none' }} />
                                <img src={ChevronUpW} alt="icon-up" className="icon-minus" style={{ display: openFaq === index ? 'none' : 'inline-block' }} />
                            </>
                        }
                        {theme==='dark' &&
                            <>
                                <img src={ChevronDownB} alt="icon-down" className="icon-plus" style={{ display: openFaq === index ? 'inline-block' : 'none' }} />
                                <img src={ChevronUpB} alt="icon-up" className="icon-minus" style={{ display: openFaq === index ? 'none' : 'inline-block' }} />
                            </>
                        }
                    </h2>
                    <p style={{ display: openFaq === index ? 'block' : 'none' }}>{item.answer}</p>
                    <hr />
                </div>
            ))}
        </div>
    </div>
  );
};

export default FaqAccordion;
