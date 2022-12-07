import React, { useEffect, useState } from 'react'
import "./DisplayCountry.css";
import { useParams } from "react-router-dom";
import BorderCountry from '../../components/BorderCountry/BorderCountry';

const DisplayCountry = () => {

    let params = useParams();

    const [country,setCountry] = useState([]);
    const [border,setBorder] = useState([]);
    const [firstRender,setFirstRender] = useState(true);

    const getCountry = async () => { 
        const response = await fetch ("https://restcountries.com/v2/name/" + params.countryName);
        const data = await response.json(); 
        setCountry(data);
        await getBorders(data[0].borders);
        
      } 

      const getBorders = async (bor) => { 
    
        const response = await fetch ("https://restcountries.com/v3.1/alpha?codes=" + bor);
        const data = await response.json();
        setBorder(data);
     
        
        }


useEffect(() => { 
  
  getCountry();

}, []);


let countryRender = country.length === 0 ? false : country[0];
let countryBorders = border.length === 0 ? false : border;
let countryBordersC = !countryBorders ? false : countryBorders.map((obj)=> {
  return obj.name.common;
});

console.log(countryRender)
/* console.log(country);
console.log(countryRender); */
let countryLang = !countryRender ? 'Loading languages' : countryRender.languages.map((array)=> {return array.name});

  return (
      <div className='DisplayContainer'>
      <div className='BackButtonContainer'><div className='ArrowButton'></div><div>Back</div></div>
      <div className='countryContainer'>
        <div className='countryFlag'><img src={countryRender.flag} /></div>
        <div className='icountryData'>
          <div className="icountryName">{!countryRender ? 'Loading' : countryRender.name}</div>
          <div className='icountryCharTable1'>
            <div className="icountryChar"><span>Native name: </span>{!countryRender ? 'Loading' : countryRender.nativeName}</div>
            <div className="icountryChar"><span>Population: </span>{!countryRender ? 'Loading' : countryRender.population}</div>
            <div className="icountryChar"><span>Region: </span>{!countryRender ? 'Loading' : countryRender.region}</div>
            <div className="icountryChar"><span>Sub Region: </span>{!countryRender ? 'Loading' : countryRender.subregion}</div>
            <div className="icountryChar"><span>Capital: </span>{!countryRender ? 'Loading' : countryRender.capital}</div>  
          </div> 
          <div className='icountryCharTable2'>
            <div className="icountryChar"><span>Top Level Domain: </span>{!countryRender ? 'Loading' : countryRender.topLevelDomain}</div>
            <div className="icountryChar"><span>Currencies: </span>{!countryRender ? 'Loading' : countryRender.currencies[0].name}</div>
            <div className="icountryChar"><span>Languages: </span>{!countryRender ? 'Loading' : countryLang.join(', ')}</div>
          </div>
          <div className='icountryBorder'>
              <div className='iCountryBorderNames'><span>Border Countries: </span>{!countryBordersC ? 'Loading borders' : countryBordersC.map((bName,index)=> {
                return <BorderCountry bName={bName} key={index} />
              })} </div>
          </div>         
        </div>
        
      </div>
      </div>

  )
}

export default DisplayCountry;