import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const NewsDetails = lazy(() => import('./pages/NewsDetails/NewsDetails'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news/:id" element={<NewsDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
