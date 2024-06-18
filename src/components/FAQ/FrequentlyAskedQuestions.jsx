import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { QuestionsData } from './QuestionsData';
import './FrequentlyAskedQuestions.css'

const FrequentlyAskedQuestions = () => {
    const [selected, setSelected] =useState(null);

    const toggle = (index) => {
        if(selected === index){
            return setSelected(null);
        }
        setSelected(index);
    }
    return (
        <section id="faq" className='faq'>
            <div className="container">
                <div className="faq-header">
                    <h2 className="faq-title">You Might Ask</h2>
                    <p className="faq-subtitle">Frequently Asked Questions</p>
                </div>
                <ul className="faq-list">
                    {QuestionsData.map((item, index)=> {
                        return (
                            <li className="accordion" key={item.id}>
                                <div className='question'>
                                <span className='arrow-icon'>{selected === index ?<IoIosArrowUp /> : <IoIosArrowDown />}</span>
                                <div className="collapsible-title" onClick={() => toggle(index)}>{item.question}</div>
                                </div>
                                <div className={selected === index ? 'collapsible-text show' : 'collapsible-text'}>
                                    {item.answer}
                                </div>
                            </li>
                        )
                    })}
                </ul>
                 <a href="/" className='ask-more-btn'>Ask More</a>
            </div>
        </section>
    )
}

export default FrequentlyAskedQuestions;