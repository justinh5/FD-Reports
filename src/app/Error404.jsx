import React from 'react';
import { Link } from 'react-router-dom';

function Error404(){
  return (
    <div>
      <h2>This page does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

export default Error404;
