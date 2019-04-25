import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navigation.scss";

function Navigation() {

  return (
    <div>
      <nav className="header-nav">
        <ul>
          <li>
            <div className="dropdown">Food</div>
            <div className="dropdown-content">
              <Link to="/page1">Averse Events</Link>
              <Link to="/page2">Recalls</Link>
            </div>
          </li>
          <div className="vertical-divider"></div>
          <li>
            <div className="dropdown">Drugs</div>
            <div className="dropdown-content">
              <Link to="/page1">Averse Events</Link>
              <Link to="/page2">Recalls</Link>
            </div>
          </li>
          <div className="vertical-divider"></div>
          <li>
            <div className="dropdown">Devices</div>
            <div className="dropdown-content">
              <Link to="/page1">Averse Events</Link>
              <Link to="/page2">Recalls</Link>
            </div>
          </li>
          <div className="vertical-divider"></div>
          <li>
            <div className="dropdown">
              <a href="https://www.fda.gov/" target="_blank">FDA</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}


export default Navigation;
