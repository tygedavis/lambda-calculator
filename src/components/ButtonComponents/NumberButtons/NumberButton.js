import React from "react";

const NumberButton = (props) => {
  console.log(`This is props for NumberButton`, props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>
        {props.btn}
      </button>
    </>
  );
};


export default NumberButton;