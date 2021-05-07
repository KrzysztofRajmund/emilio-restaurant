import React from 'react';
import { hydrate, render } from 'react-dom';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmilioApp from './components/Home/EmilioApp';
import reportWebVitals from './reportWebVitals';

const APP = <EmilioApp />;

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
