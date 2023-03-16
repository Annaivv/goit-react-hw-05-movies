import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastById } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCastById(movieId).then(console.log);
  }, [movieId]);

  return (
    <>
      <p>Name</p>
      <p>Character</p>
    </>
  );
};

export default Cast;
