import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import "./CountryCard.css"

const CountryCard = (props) => {

    const navigate = useNavigate();
    const {country} = props;
    const {name, population, capital, region, flags} = country;
    console.log(country)

    const renderCapital = () => { 
        if (!capital) {
            return 'No capital';
        } else if (capital === 0) {
            return 'No capital';
        } else {
            return capital.join(', ');
        }
        
     }

  return (
    <div className='countryData'>
        <button onClick={()=>{navigate('/countries/' + country.name.common)}}>
        <div className='flag'><img src={flags.png}/></div>
        <div className='countryText'>
            <div className='countryName'> {name.common}</div>
            <div className='countryPopulation'><span className='dataTitle'>Population:</span> {population.toLocaleString('en')}</div>
            <div className='countryRegion'><span className='dataTitle'>Region:</span> {region}</div>
            <div className='countryCapital'><span className='dataTitle'>Capital:</span>  {renderCapital()} </div>
        </div>
        </button>
    </div>
  )
}

export default CountryCard;
