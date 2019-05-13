import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App";
import * as serviceWorker from "./serviceWorker";
import "./css/index.css";

ReactDOM.render( <App />, document.querySelector( '[data-js="app"]' ) );

serviceWorker.unregister();
