const baseURL = "https://3wknjhpnq4.execute-api.us-east-1.amazonaws.com/spoontoo_sample/menu_brand?brandID=";

const fetcher = async (restaurantID) => {
  const response = await fetch(baseURL + restaurantID)
  const data = await response.json()
  return data
}

export default fetcher