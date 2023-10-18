import React, { useContext, useEffect, useState } from 'react';
import "./CountrySearcher.css";
import { ThemeContext } from '../../context/ThemeProvider';


const CountrySearcher = (props) => {

const { theme } = useContext(ThemeContext);

const {setCountries} = props;

const [keyword,setKeyword] = useState('');

const getSearched = async () => { 
  
    const response = await fetch ("https://restcountries.com/v3.1/name/" + keyword);
    const data = await response.json();
    
  
    if(Array.isArray(data)) {
      setCountries(data);
      
    } else {
      console.log(data)
      setCountries(false);
    }


  
}

useEffect(() => {
  if (keyword !== '') getSearched();
}, [keyword]);


  return (
    <div className={theme == 'light' ? 'searcher-bar' : 'searcher-bar-dark'}>
        <div className={theme == 'light' ? 'search-icon' : 'search-icon-dark'}><div className={theme == 'light' ? 'search-icon-image' : 'search-icon-image-dark'}></div></div>
        <form>
            <input value={keyword} type='search' placeholder='Search for a country...' onChange={(e) => { 
              setKeyword(e.target.value);
            }}></input>
        </form>
    </div>
  )
}

export default CountrySearcher;