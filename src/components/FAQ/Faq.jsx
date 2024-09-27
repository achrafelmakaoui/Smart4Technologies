import React, { useState } from 'react';
import './Faq.css';
import ChevronUpW from '../Assets/chevron-up.svg'
import ChevronDownW from '../Assets/chevron-down.svg'
import ChevronUpB from '../Assets/chevron-up-dark.svg'
import ChevronDownB from '../Assets/chevron-down-dark.svg'
import { useTheme } from '../../ThemeContext';
import AnimatedHeading from '../../AnimatedHeading';

const FaqAccordion = () => {
  const { theme } = useTheme();

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is the hydrogen value chain?',
      answer: `The hydrogen value chain refers to the entire process of producing, storing, transporting, and utilizing hydrogen. It encompasses various stages, from hydrogen production to its final application.`,
    },
    {
      question: 'How is hydrogen produced?',
      answer: `Electrolysis: Using renewable energy sources to split water into hydrogen and oxygen. Reforming: Converting hydrocarbons like natural gas or biomass into hydrogen and carbon dioxide. Steam Methane Reforming (SMR): A common reforming method involving reacting methane with steam. Other methods: Gasification, water-gas shift reaction, and biological production.`,
    },
    {
      question: 'What are the different types of hydrogen?',
      answer: `Grey hydrogen: Produced from fossil fuels, resulting in significant carbon emissions. Blue hydrogen: Produced from fossil fuels but with carbon capture and storage (CCS) to reduce emissions. Green hydrogen: Produced from renewable energy sources through electrolysis, resulting in zero carbon emissions.`,
    },
    {
      question: `What are the challenges in hydrogen production?`,
      answer: `Cost: The cost of renewable energy sources and electrolysis equipment can be high. Efficiency: The efficiency of hydrogen production processes can vary. Infrastructure: Developing the necessary infrastructure for hydrogen production, storage, and transportation requires significant investment.`,
    },
    {
        question: `How is hydrogen stored and transported?`,
        answer: `Storage: Hydrogen can be stored as a gas, liquid, or in solid materials like metal hydrides. Transportation: Hydrogen can be transported via pipelines, trucks, or as a compressed gas or liquid in specialized containers.`,
    },
    {
      question: `What are the potential applications of hydrogen?`,
      answer: `Energy generation: Fuel cells, gas turbines, and combined cycle power plants. Transportation: Fuel cell vehicles, hydrogen-powered aircraft and ships. Industrial processes: Steelmaking, ammonia production, and refining. Heating and cooking: Hydrogen can be used for residential and commercial heating.`,
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
