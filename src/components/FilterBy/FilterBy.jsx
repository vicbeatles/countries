import React, {useContext, useEffect, useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FilterBy.css";
import { ThemeContext } from '../../context/ThemeProvider';
import { ButtonGroup } from 'react-bootstrap';



const FilterBy = (props) => {

  const {setRegion} = props;
  const { theme } = useContext(ThemeContext)


  return (
    <div className='filter-container'>
       <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id={theme == 'light' ? "dropdown-basic-button" : "dropdown-basic-button-dark"}>Filter by Region</Dropdown.Toggle>
        <Dropdown.Menu className={theme == 'light' ? "dropdown-menu" : "dropdown-menu-dark"}> 
      <Dropdown.Item onClick={(e) => {setRegion('Africa')}}>Africa</Dropdown.Item>
      <Dropdown.Item onClick={(e) => {setRegion('Americas')}}>America </Dropdown.Item>
      <Dropdown.Item onClick={(e) => {setRegion('Asia')}}>Asia </Dropdown.Item>
      <Dropdown.Item onClick={(e) => {setRegion('Europe')}}>Europe </Dropdown.Item>
      <Dropdown.Item onClick={(e) => {setRegion('Oceania')}}>Oceania </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default FilterBy