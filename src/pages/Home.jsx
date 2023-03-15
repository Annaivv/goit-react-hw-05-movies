import { MovieList } from 'components/MovieList';
// import { useState } from 'react';
// import { getTrending } from 'services/api';

export const Home = () => {
  //   getTrending().then(res => setMovies(res.data.results));

  return (
    <>
      <h1>Trending today</h1>
      <MovieList></MovieList>
    </>
  );
};
