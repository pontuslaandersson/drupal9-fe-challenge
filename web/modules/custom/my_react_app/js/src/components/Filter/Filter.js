import React from 'react';
import styled from 'styled-components'

const BigFilterWrapper = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: row;
`
const CountryFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
`
const CountryFilter = styled.select`
  width: 180px;
  height: 20px;
  margin-top: 2px;
`
const CountryFilterLabel = styled.label`
  font-size: 12px;
`
const AvailabilityFilterWrapper = styled.div`
  margin-top: 25px;
`

const Filter = ( { handleFilterChange, setFilterByAvailability, filterByAvailability } ) => {
  return (
    <BigFilterWrapper>
      <CountryFilterWrapper>
        <CountryFilterLabel htmlFor="hotels">Filter by country</CountryFilterLabel>
        <CountryFilter name="hotels" id="hotels" onChange={e => handleFilterChange(e.target.value)}>
          <option value=""></option>
          <option value="Finland">Finland</option>
          <option value="Spain">Spain</option>
          <option value="Netherlands">Netherlands</option>
        </CountryFilter>
      </CountryFilterWrapper>
      <AvailabilityFilterWrapper>
        <input type="checkbox" id="isAvailable" name="isAvailable" onChange={() => setFilterByAvailability(!filterByAvailability)}/>
        <label htmlFor="isAvailable"> Is available</label>
      </AvailabilityFilterWrapper>
      
    </BigFilterWrapper>
  )
}

export default Filter
