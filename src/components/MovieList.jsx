import { Link } from 'react-router-dom';

export const MovieList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link
            style={{ margin: '10px 0', display: 'block' }}
            to={`/movies/${item.id}`}
          >
            {item.title ?? item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
