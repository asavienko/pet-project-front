import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';
import App from './App';
// TODO asavienko: add sentry
// import { intiSentry } from 'config/sentry.config';

import './styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// intiSentry();
