import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/landing/landingNav.scss';

function LandingNav() {

  return (
    <div>
      <nav className="landing-nav">
        <ul>
          <li>
            <div className="dropdown">Food</div>
            <div className="dropdown-content">
              <Link to="/AdverseEvents/Food">Adverse Events</Link>
              <Link to="/Recalls/Food">Recalls</Link>
            </div>
          </li>
          <div className="vertical-divider"></div>
          <li>
            <div className="dropdown">Drugs</div>
            <div className="dropdown-content">
              <Link to="/AdverseEvents/Drug">Adverse Events</Link>
              <Link to="/Recalls/Drug">Recalls</Link>
            </div>
          </li>
          <div className="vertical-divider"></div>
          <li>
            <div className="dropdown">Devices</div>
            <div className="dropdown-content">
              <Link to="/AdverseEvents/Device">Adverse Events</Link>
              <Link to="/Recalls/Device">Recalls</Link>
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


export default LandingNav;
