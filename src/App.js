import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact";
import { Portfolio } from "./components/Portfolio/Portfolio";
import FrequentlyAskedQuestions from "./components/FAQ/FrequentlyAskedQuestions";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Card from "./components/Card/Cards";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header /> <Contact /><Portfolio /><Services /><FrequentlyAskedQuestions /><Team />
            <About /><Card /><Footer /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
