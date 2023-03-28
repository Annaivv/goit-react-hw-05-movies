import { HiArrowLeft } from 'react-icons/hi';
import { ButtonLink } from './BackButton.styled';

export const BackLink = ({ to, children }) => {
  return (
    <ButtonLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </ButtonLink>
  );
};
