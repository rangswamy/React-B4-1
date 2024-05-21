import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/*");
    };
    return (
        <>
            <div className="Header">
                <div className="icon">
                    <img className='main-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9eTUujuome-L3ZboYU47V7ZJRhSHhW7YivbRvouHFw&s' alt='' onClick={() => handleClick()} ></img>
                </div>
                <div className="container">

                    <div className='topbar'>
                        <div className="phoneNumber">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                            <a href="tel:+91 7619221922" className='number'>+91 76192 21922</a>
                        </div>
                        <div>
                            <div className="email-info">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-arrow-down" viewBox="0 0 16 16" color='oranged'>
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z" />
                                </svg>
                                <a href='mailto:admin@amigosbusinesscorp.com'>admin@amigosbusinesscorp.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <nav class="navbar navbar-expand-lg bg-transparent">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="orderedlist">
                                <li class="nav-item">
                                    <Link to={`/home`} class="nav-home" aria-current="page" href="2">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={`/about`} class="nav-link" aria-current="page" href="2">About</Link>
                                </li>

                                <li class="nav-item">
                                    <Link to={`/service`} class="nav-link" href="3">Services</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={`/portfolio`} class="nav-link" href="3">Portfolio</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={`/pricing`} class="nav-link" href="3">Pricing</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={`/Team`} class="nav-link" href="4">Team</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={`/contact`} class="nav-link" href="5">Contact</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div >

        </>
    )
}
export default Header;
