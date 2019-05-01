import React from 'react';
import Disclaimer from '../app/Disclaimer';
import food_icon from '../assets/images/food_icon.svg';
import drug_icon from '../assets/images/drug_icon.svg';
import device_icon from '../assets/images/device_icon.svg';


function AEHeader(props) {

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
      <h1 className="subtitle">Adverse Events</h1>
      <Disclaimer/>
    </div>
  );
}


export default AEHeader;
