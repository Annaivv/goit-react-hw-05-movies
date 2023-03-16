import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import Cast from './Cast';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieById(movieId)
      .then(({ data }) => {
        // console.log(data);
        setMovie(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const genres = movie?.genres;
  console.log(genres);

  return (
    <div>
      <section>
        <div>{/* <img src={movie?.backdrop_path} alt="movie poster" /> */}</div>
        <div>
          <h2>{movie?.title ?? movie?.name}</h2>
          <p>User score: {Math.round(movie?.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie?.overview}</p>
          <h4>Genres</h4>
          {genres ? (
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          ) : (
            'No genres'
          )}
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
