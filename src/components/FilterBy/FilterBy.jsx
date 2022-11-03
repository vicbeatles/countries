import React, {useEffect, useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FilterBy.css";



const FilterBy = (props) => {

  const {setRegion} = props;



  return (
    <div className='filter-container'>
        <DropdownButton id="dropdown-basic-button" title="Filter by Region">
      <Dropdown.Item onClick={(e) => {setRegion('Africa')}}>Africa</Dropdown.Item>
      <Dropdown.Item onClick={(e) => {setRegion('Americas')}}>America </Dropdown.Item>
      <Dropdown.Item onClick={(e) => {setRegion('Asia')}}>Asia </Dropdown.Item>
      <Dropdown.Item onClick={(e) => {setRegion('Europe')}}>Europe </Dropdown.Item>
      <Dropdown.Item onClick={(e) => {setRegion('Oceania')}}>Oceania </Dropdown.Item>
    </DropdownButton>
    </div>
  )
}

export default FilterBy