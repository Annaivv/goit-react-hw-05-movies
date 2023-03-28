import { MovieList } from 'components/MovieList';
import { useState, useEffect } from 'react';
import { fetchMoviesList } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesList().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      <MovieList items={movies}></MovieList>
    </>
  );
};

export default Home;
