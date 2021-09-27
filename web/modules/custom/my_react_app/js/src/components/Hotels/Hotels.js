import React from 'react';
import styled from 'styled-components'

const HotelCard = styled.div`
  background: #f4f4f4;
  margin: 2px;
  overflow: hidden;
  position: relative;
  min-height: 60px;
  max-width: 450px;
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
  margin-top: auto;
  margin-bottom: 20px;
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
  @media only screen and (max-width: 320px) {
    width: 90px;
    height: 90px;
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
  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 12px;
  }
`
const HotelName = styled.h2`
  font-size: 14px;
  font-weight: light;
  margin: 0px;
  @media only screen and (max-width: 450px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 10px;
  }
`
const HotelLocation = styled.div`
  font-size: 12px;
  margin: 0px;
  @media only screen and (max-width: 450px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 8px;
  }
`
const HotelAvailability = styled.div`
  font-size: 12px;
  margin: 0px;
  @media only screen and (max-width: 450px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 8px;
  }
`
const HotelSwimmingpool = styled.div`
  font-size: 12px;
  margin: 0px;
  @media only screen and (max-width: 450px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 8px;
  }
`

const Hotels = ( { hotelsToShow } ) => {
return (
  <div>
    {hotelsToShow && hotelsToShow.map((hotel, index) => {
        return (
          <HotelCard key={index}>
              <div>
                <div><HotelImage src={hotel.imageUrl} width="200px" height="200px" alt={`${hotel.name}`}></HotelImage></div>
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

