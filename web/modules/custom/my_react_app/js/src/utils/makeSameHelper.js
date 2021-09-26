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

  const exp = { makeSame }
export default exp