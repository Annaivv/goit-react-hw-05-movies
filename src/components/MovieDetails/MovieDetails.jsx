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
  InfoItem,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const [isLoading, setIsLoading] = useState(false);
  const [backLink, setBackLink] = useState(null);
  const location = useLocation();
  const fallBackImg = 'https://placehold.co/400x200?text=No+poster+found';

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

  useEffect(() => {
    if (backLink) return;
    const backLinkHref = location.state?.from ?? '/';
    setBackLink(backLinkHref);
  }, [backLink, location.state?.from]);

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
        <BackLink to={backLink}>Back</BackLink>
        <MovieInfo>
          <MoviePoster>
            {movie.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title ?? movie.name}
              />
            ) : (
              <img src={fallBackImg} alt="no movie found" />
            )}
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
            <InfoItem>
              <Link to="cast">Cast</Link>
            </InfoItem>
            <InfoItem>
              <Link to="reviews">Reviews</Link>
            </InfoItem>
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
