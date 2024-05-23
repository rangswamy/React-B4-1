import React from 'react';
import { servicesData } from './ServicesData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css'

const Services = () => {
    return (
        <section id='services' className='services'>
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                    <p>IT Training</p>
                </div>
                <div className="row">
                    { servicesData.map((data)=> { 
                        return (
                            <div className='col-lg-3 col-md-6' key={data.id}>
                                <div className="service-item">
                                    <img src={data.image} alt="pictures" className='sevice-img' />
                                    <div className="service-info">
                                        <h3>{data.course}</h3>
                                        <p>{data.description}</p>
                                    </div>
                                    <div className="learn-more">
                                        <a href="/" className='btn'>Learn More</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </section >
    )
}

export default Services;
