import { getTrending } from 'services/api';

export const MovieList = () => {
  getTrending();

  return (
    <ul>
      {/* {items.map(item => (
        <li key={item.id}>
          <span></span>
        </li>
      ))} */}
    </ul>
  );
};
