import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/videos';
const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    part: 'contentDetails,snippet,statistics',
    id: '7ghhRHRP6t4',
  },
  headers: {
    'X-RapidAPI-Key': '124beff6fcmsh4aacf917256fd61p13baa9jsneffb301e16ac',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
