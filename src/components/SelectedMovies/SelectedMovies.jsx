import { Link, generatePath } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';

const SelectedMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            style={{ margin: '10px 0', display: 'block' }}
            to={generatePath(PAGE_NAMES.movie, { movieId: movie.id })}
          >
            {movie.title ?? movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SelectedMovies;
