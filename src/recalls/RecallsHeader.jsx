import React from 'react';
import food_icon from '../assets/images/food_icon.svg';
import drug_icon from '../assets/images/drug_icon.svg';
import device_icon from '../assets/images/device_icon.svg';


function RecallsHeader(props) {

  function imageType(img) {
    switch (img) {
      case 'Food':
        return food_icon;
      case 'Drug':
        return drug_icon;
      case 'Device':
        return device_icon;
    }
  }

  return (
    <div>
      <div className="title-container">
        <h1>{props.page} Reports</h1>
        <img src={imageType(props.page)}/>
      </div>
      <h1 className="subtitle">Recalls</h1>
      <div className="notice-container">
        <em className="notice">Data released by the FDA for public use (2004 - present)</em>
        <em className="notice">Do not rely on FD Reports to make decisions regarding medical care. Always speak to your health provider about the risks and benefits of FDA-regulated products.</em>
      </div>
    </div>
  );
}


export default RecallsHeader;
