import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HeadProvider, Title, Meta, Link } from 'react-head';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeadProvider>
      <Title>Pokédex | Ziurcast</Title>
      <Meta charSet="UTF-8" />
      <Link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <App />
    </HeadProvider>
  </React.StrictMode>
);
