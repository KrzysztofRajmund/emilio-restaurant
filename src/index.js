import React from 'react';
// react-snap server side rendering replacement
import { hydrate, render } from 'react-dom';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmilioApp from './components/Home/EmilioApp';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<EmilioApp />, rootElement);
} else {
  render(<EmilioApp />, rootElement);
}
