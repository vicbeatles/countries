import React, { useEffect, useState } from 'react'
import "./DisplayCountry.css";
import { useParams } from "react-router-dom";

const DisplayCountry = () => {

    let params = useParams();

    const [country,setCountry] = useState([]);

    const getCountry = async () => { 
        const response = await fetch ("https://restcountries.com/v2/name/" + params.countryName);
        const data = await response.json(); 
        setCountry(data);  

      }


useEffect(() => { 
  
  getCountry();

}, []);
 
let countryRender = country.length === 0 ? false : country[0];
console.log(country);
console.log(countryRender);

  return (
    <div>{!countryRender ? 'Loading' : countryRender.name}</div>
  )
}

export default DisplayCountry;