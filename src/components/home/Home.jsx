

import image from "../image/logo.png"
import Service from "../service/Service";
import About2 from "../about/About2";
import Contact from"../contact/Contact";
import {BrowserRouter as Router, Link, Routes,Route} from "react-router-dom"



const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <img className="logo" src={image} alt="" />
          <div className="links">
            <span className="icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
            
            <ul> 
           
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="landing">
        <div className="intro-text">
          <h1>Hello there</h1>
          <p>We are Leon - a super creative &amp; minimal web template</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
