import React from 'react';
import styled from 'styled-components'

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const CountryFilter = styled.select`
  width: 180px;
  height: 20px;
  margin-top: 2px;
`
const AvailabilityFilter = styled.input`
  padding: 20px;
`

const Filter = ( { handleFilterChange, setFilterByAvailability, filterByAvailability } ) => {
return (
  <div>
    <FilterWrapper>
      <label htmlFor="hotels">Filter by country</label>
      <CountryFilter name="hotels" id="hotels" onChange={e => handleFilterChange(e.target.value)}>
        <option value=""></option>
        <option value="Finland">Finland</option>
        <option value="Spain">Spain</option>
        <option value="Netherlands">Netherlands</option>
      </CountryFilter>
    </FilterWrapper>
    <span><AvailabilityFilter type="checkbox" id="isAvailable" name="isAvailable" onChange={() => setFilterByAvailability(!filterByAvailability)}/></span>
    <label htmlFor="isAvailable"> Is available</label>
  </div>
)
}

export default Filter
