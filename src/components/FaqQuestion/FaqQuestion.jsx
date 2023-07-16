import React from 'react';
import { useState } from 'react';
import './f-question.css';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
const FaqQuestion = ({ FaqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {FaqData.map((item, index) => (
        <div key={index} className="border-bottom mb-3">
          <div
            className={`accordion-item    ${
              index === activeIndex ? 'active' : ''
            }`}
            onClick={() => handleAccordionClick(index)}
          >
            <h6 className={`${index === activeIndex ? 'active' : ''}`}>
              {item.question}
            </h6>
            <span className="accordion-icon">
              {index === activeIndex ? <BiCaretUp /> : <BiCaretDown />}
            </span>
          </div>
          <div
            className={`accordion-content   ${
              index === activeIndex ? 'show' : ''
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqQuestion;
