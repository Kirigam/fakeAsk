import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css//bootstrap.min.css';
import './main.html';
import App from '../imports/startup/client/index';


Meteor.startup(() => ReactDOM.render(<App />, document.getElementById('root')));