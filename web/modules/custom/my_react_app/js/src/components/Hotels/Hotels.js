import React from 'react';
import styled from 'styled-components'

const HotelCard = styled.div`
  background: #f4f4f4;
  margin: 2rem;
  overflow: hidden;
  position: relative;
  min-height: 60rem;
  max-width: 450rem;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const TopRow = styled.div`
  margin-left: 5rem;
  margin-right: auto;
  margin-top: 10rem;
  margin-bottom: auto;
`
const BottomRow = styled.div`
  position: absolute;
  top: 60%;
  margin-left: 5rem;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: 20rem;
`
const HotelImage = styled.img` 
  width: 150rem;
  height: 150rem;
  margin: 10rem;
  margin-top: 10rem;
  float: left;
  @media only screen and (max-width: 450px) {
    width: 100px;
    height: 100px;
  }
  @media only screen and (max-width: 320px) {
    width: 90px;
    height: 90px;
  }
`/* */
const Price = styled.div`
  color: green;
  font-size: 16rem;
  margin-top: 5rem;
  padding: 10rem;
  position: absolute;
  top: 0rem;
  right: 0rem;
  
`/* @media only screen and (max-width: 450rem) {
    font-size: 14rem;
  }
  @media only screen and (max-width: 320rem) {
    font-size: 12rem;
  }*/
const HotelName = styled.h2`
  font-size: 14rem;
  font-weight: light;
  margin: 0rem;
  
`/*@media only screen and (max-width: 450rem) {
    font-size: 12rem;
  }
  @media only screen and (max-width: 320rem) {
    font-size: 10rem;
  } */
const HotelLocation = styled.div`
  font-size: 12rem;
  margin: 0rem;
  
  }
`/*@media only screen and (max-width: 450rem) {
    font-size: 10rem;
  }
  @media only screen and (max-width: 320rem) {
    font-size: 8rem;
   } */
const HotelAvailability = styled.div`
  font-size: 12rem;
  margin: 0rem;
  
`/*@media only screen and (max-width: 450rem) {
    font-size: 10rem;
  }
  @media only screen and (max-width: 320rem) {
    font-size: 8rem;
  } */
const HotelSwimmingpool = styled.div`
  font-size: 12rem;
  margin: 0rem;
  
`/*@media only screen and (max-width: 450rem) {
    font-size: 10rem;
  }
  @media only screen and (max-width: 320rem) {
    font-size: 8rem;
  } */

const Hotels = ( { hotelsToShow } ) => {
return (
  <div>
    {hotelsToShow && hotelsToShow.map((hotel, index) => {
        return (
          <HotelCard key={index}>
              <div>
                <div><HotelImage src={hotel.imageUrl} width="200rem" height="200rem" alt={`${hotel.name}`}></HotelImage></div>
                <Wrapper>
                  <TopRow>
                      <HotelName>{hotel.name}</HotelName>
                    <div>
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
  </div>
)
}

export default Hotels
