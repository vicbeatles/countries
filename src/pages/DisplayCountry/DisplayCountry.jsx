import React, { useEffect, useState } from 'react'
import "./DisplayCountry.css";
import { useParams } from "react-router-dom";

const DisplayCountry = () => {

    let params = useParams();

    const [country,setCountry] = useState([]);

    const getCountry = async () => { 
        const response = await fetch ("https://restcountries.com/v2/name/" + params.countryName);
        const data = await response.json();
        console.log(data); 
        setCountry(data);       
      }


useEffect(() => { getCountry(); }, []);


  return (
    <div>DisplayCountry</div>
  )
}

export default DisplayCountry;