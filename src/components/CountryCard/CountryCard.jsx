import React from 'react';
import "./CountryCard.css"

const CountryCard = (props) => {
    const {country} = props;
    const {name, population, capital, region, flags} = country;
    console.log(flags)

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
        <div className='flag'><img src={flags.svg}/></div>
        <div className='countryText'>
            <div className='countryName'> {name.common}</div>
            <div className='countryPopulation'><span className='dataTitle'>Population:</span> {population}</div>
            <div className='countryRegion'><span className='dataTitle'>Region:</span> {region}</div>
            <div className='countryCapital'><span className='dataTitle'>Capital:</span>  {renderCapital()} </div>
        </div>

    </div>
  )
}

export default CountryCard;
