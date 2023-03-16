import styled from 'styled-components';
import { Routes, Route, NavLink } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import MovieDetails from './MovieDetails';
import { PAGE_NAMES } from 'router/paths';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <div>
      <Layout>
        <nav>
          <StyledLink to={PAGE_NAMES.homepage} end>
            Home
          </StyledLink>
          <StyledLink to={PAGE_NAMES.movies}>Movies</StyledLink>
        </nav>

        <Routes>
          <Route path={PAGE_NAMES.homepage} element={<Home />} />
          <Route path={PAGE_NAMES.movies} element={<Movies />}>
            {/* <Route path=''/> */}
          </Route>
          <Route path={PAGE_NAMES.movie} element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </Layout>
    </div>
  );
};
