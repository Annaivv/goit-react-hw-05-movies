import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { GlobalStyle } from './GlobalStyle';
import SharedLayout from './Layout/SharedLayout';
import { Container } from './Layout/SharedLayout.styled';
import { PAGE_NAMES } from 'router/paths';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const NotFound = lazy(() => import('pages/NotFound'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import NotFound from 'pages/NotFound';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Cast from './Cast';
// import Reviews from './Reviews';

export const App = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <GlobalStyle />
    </Container>
  );
};
