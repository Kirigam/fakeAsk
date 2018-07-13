import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Pages/Main/Container';
import UserPost from '../Pages/UserPost/Container';
import NotFound from '../NotFound/Component';
import Header from '../Header/Component';
import User from '../Pages/UserInfo/Container';

const Routes = () => {
   return <React.Fragment>
              <Header />
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/posts' component={UserPost} />
              <Route path='/user' component={User} />
              <Route component={NotFound} />
            </Switch>
          </React.Fragment>
};

export default Routes;