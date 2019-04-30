import React from 'react';
import icon from '../assets/images/food_icon.svg';


function AEHeader() {

  return (
    <div>
      <div className="title-container">
        <h1>Food Reports</h1>
        <img src={icon}/>
      </div>
      <h1 className="subtitle">Adverse Events</h1>
      <div className="notice-container">
        <em className="notice">Data released by the FDA for public use (2004 - present)</em>
        <em className="notice">Do not rely on FD Reports to make decisions regarding medical care. Always speak to your health provider about the risks and benefits of FDA-regulated products.</em>
      </div>
    </div>
  );
}


export default AEHeader;
