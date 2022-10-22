import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FilterBy.css";



const FilterBy = () => {
  return (
    <div className='filter-container'>
        <DropdownButton id="dropdown-basic-button" title="Filter by Region">
      <Dropdown.Item>Africa</Dropdown.Item>
      <Dropdown.Item>America </Dropdown.Item>
      <Dropdown.Item>Asia </Dropdown.Item>
      <Dropdown.Item>Europe </Dropdown.Item>
      <Dropdown.Item>Oceania </Dropdown.Item>
    </DropdownButton>
    </div>
  )
}

export default FilterBy