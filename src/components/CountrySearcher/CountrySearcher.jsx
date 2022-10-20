import React, { useEffect, useState } from 'react';
import "./CountrySearcher.css";

const CountrySearcher = (props) => {

const {setCountries} = props;

const [keyword,setKeyword] = useState('');

const getSearched = async () => { 
  
    const response = await fetch ("https://restcountries.com/v3.1/name/" + keyword);
    const data = await response.json();
    
  
    if(Array.isArray(data)) {
      setCountries(data);
      
    } else {
      setCountries([]);
    }


  
}

useEffect(() => {
  if (keyword !== '') getSearched();
}, [keyword]);


  return (
    <div className='searcher-bar'>
        <div className='search-icon'> </div>
        <form>
            <input value={keyword} type='search' placeholder='Search for a country...' onChange={(e) => { 
              setKeyword(e.target.value);
            }}></input>
        </form>
    </div>
  )
}

export default CountrySearcher;