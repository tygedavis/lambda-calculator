import React from "react";

const OperatorButton = (props) => {
  //console.log(`This is props for OperatorButton`, props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>
        {props.btn.char}
      </button>
    </>
  );
};

export default OperatorButton;