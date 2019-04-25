import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/images/title.svg";
import banner from "../assets/images/api_banner.jpg";


function Landing() {

  return (
    <div>
      <div>
        <img src={logo}/>
        <h3>Food, Drug, and Device Adverse Events and Recalls</h3>
      </div>
      <Navigation />
      <a href="https://open.fda.gov/" target="_blank">
        <img id="banner" src={banner} alt="OpenFDA" />
      </a>
    </div>
  );
}


export default Landing;
