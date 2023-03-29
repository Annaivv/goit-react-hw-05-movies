import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import { BackLink } from '../BackButton/BackLink';
import {
  MovieInfo,
  MoviePoster,
  MovieData,
  MoreInfo,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const fallBackImg =
    'https://www.google.com/imgres?imgurl=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Ffilm-photographic-film-recreation-black-and-white-rim-wheel-clip-art-1566355.jpg&tbnid=2Uj-It6UStWyKM&vet=12ahUKEwir4a_WwoH-AhXPxyoKHdF2D1MQMygLegUIARDaAQ..i&imgrefurl=https%3A%2F%2Fpxhere.com%2Fpl%2Fphoto%2F1566355&docid=7KyCuVFws3eNEM&w=5220&h=2910&q=film&ved=2ahUKEwir4a_WwoH-AhXPxyoKHdF2D1MQMygLegUIARDaAQ';
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    setIsLoading(true);
    setStatus('loading');
    fetchMovieById(movieId)
      .then(({ data }) => {
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

  return (
    <>
      <div>
        <BackLink to={backLinkHref}>Back</BackLink>
        <MovieInfo>
          <MoviePoster>
            <img
              src={
                `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` ||
                fallBackImg
              }
              alt="movie poster"
            />
          </MoviePoster>
          <MovieData>
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
          </MovieData>
        </MovieInfo>
        <MoreInfo>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </MoreInfo>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
