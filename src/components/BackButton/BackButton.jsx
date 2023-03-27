import { useLocation } from 'react-router-dom';
import { ButtonLink } from './BackButton.styled';

export const BackButton = ({ children }) => {
  const { state } = useLocation();
  if (!state || !state.prevPage) return null;
  return <ButtonLink to={state.prevPage}>{children}</ButtonLink>;
  // <Link to={state.prevPage}>{children}</Link>;
};
