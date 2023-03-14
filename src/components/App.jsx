import { Home } from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <GlobalStyle />
      </Layout>
    </div>
  );
};
