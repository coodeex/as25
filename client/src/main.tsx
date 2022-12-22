import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ThemingProvider } from './components/style/ThemingProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemingProvider>
        <App />
      </ThemingProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
