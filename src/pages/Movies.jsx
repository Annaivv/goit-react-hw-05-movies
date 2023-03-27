import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import { fetchMoviesList } from 'services/api';
import { MovieList } from 'components/MovieList';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchMoviesList().then(({ data }) => {
      setItems(data.results);
    });
  }, []);

  console.log(items);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  // const visibleMovies = items.filter(item =>
  //   item.title.toLowerCase().includes(movieName.toLowerCase())
  // );
  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchForm value={movieName} onChange={updateQueryString} />
      <MovieList items={items} />
    </>
  );
};

export default Movies;
