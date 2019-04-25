import React from "react";
import styles from "../styles/landing/landing.scss";
import Navigation from "./Navigation";
import Footer from "../app/Footer";
import logo from "../assets/images/title.svg";
import banner from "../assets/images/api_banner.jpg";
import article1 from "../assets/images/article1.png";
import article2 from "../assets/images/article2.png";
import article3 from "../assets/images/article3.png";
import article4 from "../assets/images/article4.png";


function Landing() {

  return (
    <div>
      <div className="logo-container">
        <img src={logo}/>
        <h3>Food, Drug, and Device Adverse Events and Recalls</h3>
      </div>
      <Navigation />
      <a href="https://open.fda.gov/" target="_blank">
        <img id="banner" src={banner} alt="OpenFDA" />
      </a>
      <div id="article-row">
        <div className="article">
          <img src={article1}/>
          <p>Lorem Ipsum dolor</p>
        </div>
        <div className="article">
          <img src={article2}/>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="article">
          <img src={article3}/>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="article">
          <img src={article4}/>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default Landing;
