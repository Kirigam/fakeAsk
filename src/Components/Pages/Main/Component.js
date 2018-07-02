import React from 'react';
import PostList from '../../PostList/Container';
import Button from '../../Button/Container';
import Search from '../../Search/Container';
import { Container, Row } from 'reactstrap';

const Main = () => {
  return  <Container>
            <Row className='justify-content-center'>
              <PostList />
            </Row>
            <Row className='justify-content-center'>
              <Button />
            </Row>
          </Container>
};

export default Main;