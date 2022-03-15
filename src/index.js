import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import './index.css';
import './styles/style.css';
import reportWebVitals from './reportWebVitals';
import BrowserRouter from 'react-router-dom/BrowserRouter';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
