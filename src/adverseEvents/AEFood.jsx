import React from "react";
import { connect } from "react-redux";
import GlobalNav from "../app/GlobalNav";
import AEHeader from "./AEHeader";
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
        <Footer/>
      </div>
    );
  }
}


export default AEfood;
