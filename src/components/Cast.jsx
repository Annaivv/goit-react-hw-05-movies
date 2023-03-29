import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastById } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieCastById(movieId)
      .then(({ data }) => {
        setCast(data.cast);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!cast && isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {cast && cast.length > 0 ? (
        <ul>
          {cast.map(castItem => (
            <li key={castItem.id} style={{ padding: '12px 0' }}>
              <img
                style={{ height: '200px', marginBottom: '8px' }}
                src={`https://image.tmdb.org/t/p/w500${castItem.profile_path}`}
                alt=""
              />
              <p>{castItem.name}</p>
              <p>Character: {castItem.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        'No cast'
      )}
    </div>
  );
};

export default Cast;
