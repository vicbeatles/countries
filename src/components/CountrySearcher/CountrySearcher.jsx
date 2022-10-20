import React, { useEffect, useState } from 'react';
import "./CountrySearcher.css";

const CountrySearcher = () => {

const [keyword,setKeyword] = useState('');


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