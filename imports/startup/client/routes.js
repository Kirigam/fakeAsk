import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../../ui/pages/Main/Container';
import UserPost from '../../ui/pages/UserPost/Container';
import NotFound from '../../ui/components/NotFound/Component';
import Header from '../../ui/components/Header/Component';
import User from '../../ui/pages/UserInfo/Container';



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