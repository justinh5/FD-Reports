import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/landing.scss";

function Navigation() {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/page1">Food</Link>
          </li>
          <div className="vertical-divider"></div>
          <li>
            <Link to="/page2">Drugs</Link>
          </li>
          <div className="vertical-divider"></div>
          <li>
            <Link to="/page3">Devices</Link>
          </li>
          <div className="vertical-divider"></div>
          <li>
            <a href="https://www.fda.gov/" target="_blank">FDA</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}


export default Navigation;
