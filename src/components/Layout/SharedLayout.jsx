import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    color: red;
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
