import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AENav from "./AENav";

class AEfood extends React.Component {

  componentWillMount() {
    //console.log("Is Mounting!");
  }

  render() {
    return (
      <div>
        <AENav/>
        <p>I'm Adverers  food!</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}


export default AEfood;
