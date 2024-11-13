import axios from "axios";

const AMADEUS_BASE_URL = "https://test.api.amadeus.com";

export const fetchHotels = async (cityCode, checkInDate, checkOutDate) => {
  try {
    const response = await axios.get(
      `${AMADEUS_BASE_URL}/shopping/hotel-offers`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AMADEUS_API_KEY}`,
        },
        params: { cityCode, checkInDate, checkOutDate },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};
