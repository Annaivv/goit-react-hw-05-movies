import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setStatus('loading');
    fetchMovieById(movieId)
      .then(({ data }) => {
        // console.log(data);
        setMovie(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (status === 'idle' || isLoading) {
    return <>Loading...</>;
  }

  if (status === 'error') {
    return <>An error occured</>;
  }

  const genres = movie.genres;
  //   console.log(genres);

  return (
    <div>
      <button>Go back</button>
      <section>
        <div>{/* <img src={movie?.backdrop_path} alt="movie poster" /> */}</div>
        <div>
          <h2>{movie.title ?? movie.name}</h2>
          <p>User score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
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
      <section>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </section>
    </div>
  );
};

export default MovieDetails;
