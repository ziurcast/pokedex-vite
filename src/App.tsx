import React, { Suspense } from 'react';
import store from '@/store';
import Layout from '@/components/Layout';
import RoutesConfig from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpinnerFullScreen from '@/components/SpinnerFullScreen';
import { Provider } from 'react-redux';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<SpinnerFullScreen />}>
        <Layout>
          <BrowserRouter>
            <Routes>
              {RoutesConfig.map(({ path, Element }) => (
                <Route key={path} path={path} element={<Element />} />
              ))}
            </Routes>
          </BrowserRouter>
        </Layout>
      </Suspense>
    </Provider>
  );
};

export default App;
