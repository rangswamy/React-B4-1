import React, { useState } from 'react'
import './Accordion.css'
import Data from './QuestionsData'
import Accordion from './Accordion'
function FAQ() {
    const [data, setData] = useState(Data)

    return (
        <section className="faq">
            <div className="container">

                <div className="section-title">
                    <h2 className='hr-lines'>F.A.Q</h2>
                    <p>Frequently Asked Questions</p>
                </div>
                {Data.map((val) => {
                    return (

                        <Accordion data={val}/>

                    )
                })}




            </div>
        </section>



    )
}

export default FAQ


