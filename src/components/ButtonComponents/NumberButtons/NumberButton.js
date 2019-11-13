import React from "react";

const NumberButton = (props) => {
  //console.log(`This is props for NumberButton`, props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div>
        <button className='numberBtn'>{props.btn}</button>
      </div>
    </>
  );
};


export default NumberButton;