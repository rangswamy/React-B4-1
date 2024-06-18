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
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<><Header /><Contact /><Services /><Portfolio /><FrequentlyAskedQuestions /><About /><Team /><Footer /></>} />
=======
          <Route path='/' element={<><Header/><Contact/><Services/><Portfolio/><FrequentlyAskedQuestions/><About/><Team /><Footer /></>} />
>>>>>>> 1548f3544a29a8772510183d04b545720016ac71
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
