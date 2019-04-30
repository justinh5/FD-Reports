import React from 'react';
import { Link } from 'react-router-dom';

class Page3 extends React.Component {

  componentWillMount() {
    //console.log("Is Mounting!");
  }

  render() {
    return (
      <div>
        <p>I'm page 3!</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}


export default Page3;
