import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './modules/store'
import Routes from './Components/Routes/Container';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return <Provider store={store}>
              <Router>
                 <Routes />
              </Router>
          </Provider>
};


export default App;
