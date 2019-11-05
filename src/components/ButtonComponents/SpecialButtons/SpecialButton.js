import React from "react";

const SpecialButton = (props) => {
 console.log(`This is props for SpecialButton`, props)
  // console.log({special})
  return (
    <>
      <button className='specialBtn'>{props.btn}</button>
    </>
  );
};

export default SpecialButton;