import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'cda61bda9f0a12d6d66e74a80f877dd6';

export const fetchMoviesList = () => {
  return axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
};

export const fetchMovieById = id => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};

export const fetchMovieCastById = id => {
  return axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
};

export const fetchMovieReviewsById = id => {
  return axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
};
