/**
 * Takes a JSON array in, and treats it so that country codes are replaced with countries.
 * In this case, we only need to replace 'FI' with 'Finland', but it could be reworked to other countries and codes.
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

  const exp = { makeSame }
export default exp