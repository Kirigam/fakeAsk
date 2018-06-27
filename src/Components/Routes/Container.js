import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Pages/Main/Container';
import UserPost from '../Pages/UserPost/Container';

const Routes = () => {
   return <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/posts' component={UserPost} />
            </Switch>
};

export default Routes;