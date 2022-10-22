import React, { useEffect, useState } from 'react';
import "./Countries.css";
import CountryCard from "../../components/CountryCard";
import CountrySearcher from '../../components/CountrySearcher/CountrySearcher';
import FilterBy from '../../components/FilterBy/FilterBy';

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
      <div className='search-filter'>
        <CountrySearcher setCountries={setCountries} />
        <FilterBy />
      </div>
      <div className='countryCards'>
      {
          
        !countries ? 'Country not found. Try again.' : (countries.length === 0 ? 'Loading...' : countries.map((country,index) => {
          return <CountryCard country={country}/>
         })) 

      }
      </div>
    </div> 
  )
}

export default Countries;
