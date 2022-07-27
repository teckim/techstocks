import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import App from './App';
import './assets/css/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
);
