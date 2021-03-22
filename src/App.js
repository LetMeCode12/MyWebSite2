import React, { useEffect } from 'react';
import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import AboutMe from './Containsers/AboutMe/AboutMe';
import Home from './Containsers/Home/Home';
import sal from "sal.js";
import FrontEnd from './Containsers/FrontEnd/FrontEnd';
import BackEnd from './Containsers/BackEnd/BackEnd';
import Tests from './Containsers/Tests/Tests';
import Others from './Containsers/Others/Others';


function App() {

  useEffect(()=>{
    sal({
      threshold: 1,
      once: true,
    });
  })

  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <AboutMe/>
      <FrontEnd/>
      <BackEnd/>
      <Tests/>
      <Others/>
      <div className="Contact">

      </div>
    </div>
  );
}

export default App;
