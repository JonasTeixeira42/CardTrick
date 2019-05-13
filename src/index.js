import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <App />, document.querySelector('[data-js="app"]') );

serviceWorker.unregister();
