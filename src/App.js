import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import FAQ from './components/Accordion/FAQ';
// import Footer from './components/Footer/Footer';
// import Team from "./components/Team/Team";
// import LoginSignup from "./components/LoginSignup/LoginSignup";
import './App.css';
import Header from "./components/Header/Header";
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact";
import { Portfolio } from "./components/Portfolio/Portfolio";
import FrequentlyAskedQuestions from "./components/FAQ/FrequentlyAskedQuestions";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Card from "./components/Card/Cards";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header /> <Contact /><Portfolio /><Services /><FrequentlyAskedQuestions /><Team />
            <About /><Card /><Footer /></>} />
          {/* <Route path='/team' element={<><FAQ /><Team /><Footer /></>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
