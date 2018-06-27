import React from 'react';
import PostList from '../../PostList/Container';
import Button from '../../Button/Container';
import Search from '../../Search/Container'

const Main = () => {
  return  <React.Fragment>
            <Search />
            <PostList />
            <Button />
          </React.Fragment>
};

export default Main;