import React, { Suspense } from 'react';
import store from '@/store';
import Layout from '@/components/Layout';
import RoutesConfig from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SpinnerFullScreen from '@/components/SpinnerFullScreen';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Suspense fallback={<SpinnerFullScreen />}>
      <Provider store={store}>
        <Layout>
          <BrowserRouter>
            <Routes>
              {RoutesConfig.map(({ path, Element }) => (
                <Route key={path} path={path} element={<Element />} />
              ))}
            </Routes>
          </BrowserRouter>
        </Layout>
      </Provider>
    </Suspense>
  );
};

export default App;
