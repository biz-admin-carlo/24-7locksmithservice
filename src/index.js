import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App';

AOS.init();

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);