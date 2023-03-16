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
        //   console.log(data.cast);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {cast ? (
        <ul>
          {cast.map(castItem => (
            <li key={castItem.id}>
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
