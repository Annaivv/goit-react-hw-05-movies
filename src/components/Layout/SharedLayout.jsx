import { Outlet } from 'react-router-dom';
import { StyledLink, Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
