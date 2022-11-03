import React, { useEffect, useState } from 'react';
import "./Countries.css";
import CountryCard from "../../components/CountryCard";
import CountrySearcher from '../../components/CountrySearcher/CountrySearcher';
import FilterBy from '../../components/FilterBy/FilterBy';

const Countries = () => {


const [countries, setCountries] = useState([]);

const [region, setRegion] = useState('');


  const getCountries = async () => { 
    const response = await fetch ("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  
  }


  useEffect(() => {
    getCountries();
    
  }, []);


  const toRender = region === '' ? countries : countries.filter(country => country.region === region);




  return (

    <div>
      <div className='search-filter'>
        <CountrySearcher setCountries={setCountries} />
        <FilterBy countries={countries} setCountries={setCountries} region={region} setRegion={setRegion}/>
      </div>
      <div className='countryCards'>
      {
          
        !toRender ? 'Country not found. Try again.' : (toRender.length === 0 ? 'Loading...' : toRender.map((country,index) => {
          return <CountryCard country={country} key={index}/>
         })) 

      }
      </div>
    </div> 
  )
}

export default Countries;
