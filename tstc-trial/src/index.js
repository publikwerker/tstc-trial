import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Compendium from './Compendium.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Compendium />, document.getElementById('root'));

serviceWorker.unregister();