import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  params: { maxResults: 100 },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};



export const fetchDataFromApi = async (url) => {
  // console.log(`${BASE_URL}/${url}`);
  const data = await axios.get(`${BASE_URL}/${url}`,options)
  return data
}
