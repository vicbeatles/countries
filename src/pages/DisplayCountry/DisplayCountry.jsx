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
let countryLang = !countryRender ? 'Loading languages' : countryRender.languages.map((array)=> {return array.name});

  return (
      <div className='countryContainer'>
        <div className='countryFlag'></div>
        <div className='icountryData'>
          <div className="icountryName">{!countryRender ? 'Loading' : countryRender.name}</div>
          <div className='icountryCharTable'>
            <div className="icountryChar">{!countryRender ? 'Loading' : countryRender.nativeName}</div>
            <div className="icountryChar">{!countryRender ? 'Loading' : countryRender.population}</div>
            <div className="icountryChar">{!countryRender ? 'Loading' : countryRender.region}</div>
            <div className="icountryChar">{!countryRender ? 'Loading' : countryRender.subregion}</div>
            <div className="icountryChar">{!countryRender ? 'Loading' : countryRender.capital}</div>  
          </div> 
          <div className='icountryCharTable'>
            <div className="icountryChar">{!countryRender ? 'Loading' : countryRender.topLevelDomain}</div>
            <div className="icountryChar">{!countryRender ? 'Loading' : countryRender.currencies[0].name}</div>
            <div className="icountryChar">{!countryRender ? 'Loading' : countryLang.join(', ')}</div>
          </div>
          <div className='icountryBorder'>
              <div className='iCountryTitle'>Border Countries:</div>
              {}    

          </div>         
        </div>
        
      </div>

  )
}

export default DisplayCountry;