import React from "react";
import { Link } from "react-router-dom";

function Page1() {

  return (
    <div>
      <p>I'm page 1!</p>
      <Link to="/">Home</Link>
    </div>
  );
}


export default Page1;
