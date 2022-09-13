import React, { useEffect, useState } from 'react';
import "./Countries.css";
import CountryCard from "../../components/CountryCard";


const Countries = () => {

  const [countries, setCountries] = useState([]);

  const getCountries = async () => { 
    const response = await fetch ("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    
  }

  useEffect(() => {
    getCountries();
  }, []);


  return (

    <div className='countryCards'>
      {countries.length === 0 ? 'Loading...' : countries.map((country,index) => {
       return <CountryCard country={country}/>
      }) }
    
    </div> 
  )
}

export default Countries;
