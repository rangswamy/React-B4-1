import React from 'react';
import { teamData } from './TeamData';
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import  TeamData  from './TeamData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Team.css';

function Team() {
    return (
        <section id='services' className='services'>
            <div className="container">
                <div className="section-title">
                    <h2>TEAM</h2>
                    <p>OUR HARDWORKING TEAM</p>
                </div>
                <div className="row">
                    {teamData.map((data) => {
                        return (
                            <div className='col-lg-3 col-md-6' key={data.id}>
                                <div className="service-item">
                                    <img src={data.image} alt="pictures" className='sevice-img' />
                                    <div className="service-info">
                                        <h3>{data.name}</h3>
                                        <p>{data.designation}</p>
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

export default Team;


