import React from 'react';
import { Provider } from 'react-redux';
import store from '../../ui/modules/store';
import Routes from './routes';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory =  createBrowserHistory();

const App = () => {
  return <Provider store={store}>
              <Router history={browserHistory}>
                 <Routes />
              </Router>
          </Provider>
};


export default App;
