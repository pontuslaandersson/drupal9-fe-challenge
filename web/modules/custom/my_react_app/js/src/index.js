import React, { useState } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
//import FilterWrapper from './components/FilterWrapper/FilterWrapper';

const App = styled.div`
  background: white;
`
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
const HotelCard = styled.div`
  background: #f4f4f4;
  margin: 2px;
  overflow: hidden;
  position: relative;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const TopRow = styled.div`
  margin-left: 5px;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: auto;
`
const BottomRow = styled.div`
  position: absolute;
  top: 60%;
  margin-left: 5px;
  margin-right: auto;
  margin-bottom: 5px;
`
const HotelImage = styled.img` 
  width: 150px;
  height: 150px;
  margin: 10px;
  margin-top: 10px;
  float: left;
  @media only screen and (max-width: 450px) {
    width: 100px;
    height: 100px;
}
`
const Price = styled.div`
  color: green;
  font-size: 16px;
  
  margin-top: 5px;
  padding: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
`
const HotelName = styled.div`
  font-size: 14px;
  padding: 0px;
`
const HotelLocation = styled.div`
  font-size: 12px;

  
`
const HotelAvailability = styled.div`
  font-size: 12px;

  
`
const HotelSwimmingpool = styled.div`
  font-size: 12px;
`
const Root = () => {
 
  const [ newFilter, setFilter ] = useState('')

  /**
   * Make into helper function.
   */
  const makeSame = (hotels) => {
    let returnArray = []
    for (let i in hotels) {
      let currentHotel
      if (!hotels[i].country && hotels[i].countryCode === 'FI') {
        currentHotel = {
        id: hotels[i].id,
        country: 'Finland',
        city: hotels[i].city,
        name: hotels[i].name,
        price: hotels[i].price,
        currency: hotels[i].currency,
        isAvailable: hotels[i].isAvailable,
        hasSwimmingPool: hotels[i].hasSwimmingPool,
        imageUrl: hotels[i].imageUrl
      }
      } else {
        currentHotel = hotels[i]
      }
      returnArray.push(currentHotel)
      }
     return (returnArray)
    }

  const hotelArray = makeSame(drupalSettings.hotels)
  const [ showAll, setShowAll] = useState(true)
  const [ filterByAvailability, setFilterByAvailability] = useState(false)

  const handleFilterChange = (country) => {
		setFilter(country)
		if (country !== ''){
			setShowAll(false)
		}
	}

  const hotelsByAvailability = filterByAvailability
  ? hotelArray.filter(hotel => hotel.isAvailable === true)
  : hotelArray
  
  const hotelsToShow = showAll
  ? hotelsByAvailability
  : hotelsByAvailability.filter(hotel => hotel.country.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)

  return (
    <App>
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
      {hotelsToShow && hotelsToShow.map((hotel, index) => {
        return (
          <HotelCard key={index}>
              <div>
                <div><HotelImage src={hotel.imageUrl} width="200px" height="200px" alt={`${hotel.name}`}></HotelImage></div>
                <Wrapper>
                  <TopRow>
                    <div>
                      <HotelName>{hotel.name}</HotelName>
                      <HotelLocation>{hotel.city}, {hotel.country}</HotelLocation>
                    </div>
                  </TopRow>
                  <BottomRow>
                      <div>
                        <HotelAvailability>Available: {hotel.isAvailable ? 'Yes' : 'No'}</HotelAvailability>
                        <HotelSwimmingpool>Swimming pool: {hotel.hasSwimmingPool ? 'Yes' : 'No'}</HotelSwimmingpool>
                      </div>
                  </BottomRow>
                </Wrapper>
                <Price>{hotel.price} {hotel.currency === 'euro' ? '€' : hotel.currency}</Price>
              </div>
          </HotelCard>
        )
      })}
    </App>
  )
}

render(<Root/>, document.querySelector('#root'));
