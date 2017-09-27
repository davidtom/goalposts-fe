import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
// registerServiceWorker();
