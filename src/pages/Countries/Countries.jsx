import React, { useEffect, useState } from 'react';
import "./Countries.css";
import CountryCard from "../../components/CountryCard";
import CountrySearcher from '../../components/CountrySearcher/CountrySearcher';


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

    <div>
      <div className='search-filter'><CountrySearcher setCountries={setCountries} /></div>
      <div className='countryCards'>
      {
          
        countries[0] === 404 ? 'Error' : (countries.length === 0 ? 'Loading...' : countries.map((country,index) => {
          return <CountryCard country={country}/>
         })) 

      }
      </div>
    </div> 
  )
}

export default Countries;
