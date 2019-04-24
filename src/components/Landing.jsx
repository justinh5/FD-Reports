import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/title.svg";

function Landing() {

  return (
    <div>
      <div>
        <img src={logo}/>
        <h3>Food, Drug, and Device Adverse Events and Recalls</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/page1">page1</Link>
          </li>
          <li>
            <Link to="/page2">page2</Link>
          </li>
          <li>
            <Link to="/page3">page3</Link>
          </li>
        </ul>
      </nav>
      <p>I'm the landing page!</p>
    </div>
  );
}


export default Landing;
