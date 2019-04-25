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
          <li>
            <Link to="/page2">Drugs</Link>
          </li>
          <li>
            <Link to="/page3">Devices</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}


export default Navigation;
