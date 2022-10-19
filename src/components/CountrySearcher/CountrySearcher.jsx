import React from 'react'
import "./CountrySearcher.css"

const CountrySearcher = () => {
  return (
    <div className='searcher-bar'>
        <form>
            <input type='text' placeholder='Search for a country...'></input>
        </form>
    </div>
  )
}

export default CountrySearcher