import React from 'react';
import PostList from './Components/PostList/Container';
import Button from './Components/Button/Container';
import Search from './Components/Search/Container'

const App = () => {
  return  <React.Fragment>
            <Search />
            <PostList />
            <Button />
          </React.Fragment>
};

export default App;
