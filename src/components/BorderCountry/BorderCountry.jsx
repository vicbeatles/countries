import React from 'react';
import "./BorderCountry.css";

const BorderCountry = (props) => {
  const {bName} = props;

  return (

    <div className='borderContainer'> {bName} </div>
  )
}

export default BorderCountry;