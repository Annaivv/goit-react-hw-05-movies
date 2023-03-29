import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import { Container } from './Layout/SharedLayout.styled';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import MovieDetails from './MovieDetails/MovieDetails';
import { PAGE_NAMES } from 'router/paths';
import Cast from './Cast';
import Reviews from './Reviews';
import { SharedLayout } from './Layout/SharedLayout';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={PAGE_NAMES.movies} element={<Movies />} />
          <Route path={PAGE_NAMES.movie} element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </Container>
  );
};
