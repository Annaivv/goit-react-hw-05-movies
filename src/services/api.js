import axios from 'axios';

const BASIC_API = 'https://api.themoviedb.org/3/';
const API_KEY = 'cda61bda9f0a12d6d66e74a80f877dd6';

export const getTrending = async () => {
  try {
    const response = await axios.get(
      `${BASIC_API}/trending/all/day?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
