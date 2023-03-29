import { Link, generatePath, useLocation } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';

export const MovieList = ({ items }) => {
  const location = useLocation();

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link
            style={{ margin: '10px 0', display: 'block' }}
            to={generatePath(PAGE_NAMES.movie, { movieId: item.id })}
            state={{ from: location }}
          >
            {item.title ?? item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
