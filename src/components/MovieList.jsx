import { Link, generatePath } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';

export const MovieList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link
            style={{ margin: '10px 0', display: 'block' }}
            to={generatePath(PAGE_NAMES.movie, { movieId: item.id })}
          >
            {item.title ?? item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
