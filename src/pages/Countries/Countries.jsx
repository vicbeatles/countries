import React, { useContext, useEffect, useState } from 'react';
import "./Countries.css";
import CountryCard from "../../components/CountryCard";
import CountrySearcher from '../../components/CountrySearcher/CountrySearcher';
import FilterBy from '../../components/FilterBy/FilterBy';
import { ThemeContext } from '../../context/ThemeProvider';

const Countries = () => {

const [countries, setCountries] = useState([]);
const [region, setRegion] = useState('');
const { theme } = useContext(ThemeContext);


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
      <div className={theme == 'light' ? 'search-filter' : 'search-filter-dark'}>
        <CountrySearcher setCountries={setCountries} />
        <FilterBy countries={countries} setCountries={setCountries} region={region} setRegion={setRegion}/>
      </div>
      <div className={theme == 'light' ? 'countryCards' : 'countryCards-dark'}>
      {    
        !toRender ? 'Countries not found. Try again.' : (toRender.length === 0 ? 'Loading...' : toRender.map((country,index) => {
          return <CountryCard country={country} key={index}/>
         })) 
      }
      
      </div>
    </div> 
  )
}

export default Countries;
