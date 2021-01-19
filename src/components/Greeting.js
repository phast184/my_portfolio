import React from "react";
import './Greeting.css'
const Greeting = ({ context }) => {
  return (
    <>
      <div className="greeting-wrapper">
        <h1>{context}</h1>
      </div>
    </>
  );
};

export default Greeting;
