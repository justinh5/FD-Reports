import React from "react";
import { connect } from "react-redux";
import styles from "../styles/adverseEvents/adverseEvents.scss";
import GlobalNav from "../app/GlobalNav";
import AEHeader from "./AEHeader";
import AELinechart from "./AELinechart";
import AESeriousness from "./AESeriousness";
import AESource from "./AESource";
import AERecords from "./AERecords";
import Footer from "../app/Footer";

class AEfood extends React.Component {

  componentWillMount() {
    //console.log("Is Mounting!");
  }

  render() {
    return (
      <div>
        <GlobalNav/>
        <AEHeader/>
        <div className="block-grid">
          <div className="one report-item">
            <AELinechart/>
          </div>
          <div className="two report-item">
            <AESeriousness/>
          </div>
          <div className="three report-item">
            <AESource/>
          </div>
          <div className="four report-item">
            <AERecords/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}


export default AEfood;
