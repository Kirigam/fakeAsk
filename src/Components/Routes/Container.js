import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Pages/Main/Container';
import UserPost from '../Pages/UserPost/Container';
import NotFound from '../NotFound/Component';

const Routes = () => {
   return <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/posts' component={UserPost} />
              <Route component={NotFound} />
            </Switch>
};

export default Routes;