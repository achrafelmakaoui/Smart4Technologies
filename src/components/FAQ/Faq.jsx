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

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: 'What are the main benefits of hydrogen as an energy source?',
      answer: `Hydrogen is a clean and sustainable energy source that produces zero emissions when used, making it ideal for reducing carbon footprints and combating climate change.`,
    },
    {
      question: 'How is hydrogen produced?',
      answer: `Hydrogen can be produced through various methods, including electrolysis of water, natural gas reforming, and biomass gasification, with green hydrogen being the most environmentally friendly option.`,
    },
    {
      question: 'What industries can benefit from hydrogen energy solutions?',
      answer: `Hydrogen can power transportation, industrial processes, energy storage, and heating systems, making it versatile for industries like automotive, manufacturing, and utilities.`,
    },
    {
      question: `How safe is hydrogen for industrial and commercial use?`,
      answer: `Hydrogen is as safe as other common fuels when handled properly, with strict safety protocols and advanced technologies in place to minimize risks.`,
    },
    {
        question: `What role does hydrogen play in achieving global energy transition goals?`,
        answer: `Hydrogen is critical in the global energy transition, offering a scalable solution for decarbonizing sectors that are difficult to electrify, such as heavy industry and long-haul transport.`,
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
                    <p className={openFaq === index ? 'open' : ''}>{item.answer}</p>
                    {/* <p style={{ display: openFaq === index ? 'block' : 'none'}}>{item.answer}</p> */}
                    <hr />
                </div>
            ))}
        </div>
    </div>
  );
};

export default FaqAccordion;
