import React, { Suspense } from 'react';
import Layout from '@/components/Layout';
import RoutesConfig from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SpinnerFullScreen from '@/components/SpinnerFullScreen';

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<SpinnerFullScreen />}>
        <BrowserRouter>
          <Routes>
            {RoutesConfig.map(({ path, Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Layout>
  );
};

export default App;
