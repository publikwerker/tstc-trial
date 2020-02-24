import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Compendium from './Compendium.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <BrowserRouter>
    <Compendium />
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();