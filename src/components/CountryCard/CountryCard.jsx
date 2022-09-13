import React from 'react'

const CountryCard = (props) => {
    const {country} = props;
    const {name, population, capital, region, flags} = country;
    console.log(country);
  return (
    <div><h1>Name:{name.common} </h1></div>
  )
}

export default CountryCard;
