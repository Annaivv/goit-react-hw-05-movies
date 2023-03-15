import { Link } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';

const NotFound = () => {
  return (
    <>
      <h2>Page not found</h2>
      <Link to={PAGE_NAMES.homepage}>Go to homepage</Link>
    </>
  );
};

export default NotFound;
