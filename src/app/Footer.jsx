import React from 'react';
import github_icon from '../assets/images/github-brands.svg';

function Footer() {

  return (
    <div className="footer-container">
      <p>FD Reports</p>
      <a href="https://github.com/justinh5/FD-Reports" target="__blank">
        <img src={github_icon}/>
      </a>
    </div>
  );
}


export default Footer;
