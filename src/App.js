import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FAQ from './components/Accordion/FAQ';
import Footer from './components/Footer/Footer';
import Team from "./components/Team/Team";
import LoginSignup from "./components/LoginSignup/LoginSignup";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><LoginSignup /></>} />
          <Route path='/abc' element={<><FAQ /><Team /><Footer /></>} />

        </Routes>
      </BrowserRouter>
      {/* <LoginSignup/> */}

      {/* <FAQ />
      <Team />
      <Footer /> */}
    </div>
  );
}

export default App;
