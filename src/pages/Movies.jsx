import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import { fetchMovieByQuery } from 'services/api';
import { useEffect, useState } from 'react';
import SelectedMovies from 'components/SelectedMovies/SelectedMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';

  useEffect(() => {
    if (movieName === '') return;

    fetchMovieByQuery(movieName).then(({ data }) => {
      setMovies(data.results);
    });
  }, [movieName]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log(form.elements[0].value);
    setSearchParams({ movieName: form.elements[0].value });
    form.reset();
  };

  console.log(movies);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchForm
        value={movieName}
        onSubmit={handleSubmit}
        onChange={updateQueryString}
      />

      {movies && <SelectedMovies movies={movies} />}
    </>
  );
};

export default Movies;
