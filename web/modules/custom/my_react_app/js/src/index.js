import React, { useState } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import Filter from './components/Filter/Filter'
import Hotels from './components/Hotels/Hotels'
import makeSameHelper from './utils/makeSameHelper'

const App = styled.div`
  background: white;
`

const Root = () => {
 
  const [ newFilter, setFilter ] = useState('')
  const hotelArray = makeSameHelper.makeSame(drupalSettings.hotels)
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
      <Filter handleFilterChange={handleFilterChange} setFilterByAvailability={setFilterByAvailability} filterByAvailability={filterByAvailability}/>
      <Hotels hotelsToShow={hotelsToShow}/>
    </App>
  )
}

render(<Root/>, document.querySelector('#root'))
