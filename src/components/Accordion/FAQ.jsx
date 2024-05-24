import React, { useState } from 'react';
import { QuestionsData } from './QuestionsData';
import './Accordion.css';

function FAQ() {
    const [selected, setSelected] = useState(null);

    const toggle = (index) => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index);
    }
    return (
        <section id="faq" className='faq'>
            <div className="container">
                <div className="section-title">
                    <h2>You Might Ask</h2>
                    <p>Frequently Asked Questions</p>
                </div>
                <ul className="faq-list">
                    {QuestionsData.map((item, index) => {
                        return (
                            <li className="accordion" key={item.id}>
                                <div className='question'>
                                    <span>{selected === index ? <i className="fa-sharp fa-solid fa-angle-up "></i> : <i className="fa-sharp fa-solid fa-angle-down "></i>}</span>
                                    <div className="collapsible-title" onClick={() => toggle(index)}>{item.question}</div>
                                </div>
                                <div className={selected === index ? 'collapsible-text show' : 'collapsible-text'}>
                                    {item.answer}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )

}

export default FAQ;





