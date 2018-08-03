import React from 'react';
import PostList from '../../components/PostList/Container';
import Button from '../../components/Button/Container';
import SiginIn from '../../components/SignIn/Component';
import { Container, Row } from 'reactstrap';

const Main = () => {
  return  <Container>
            <Row className='justify-content-center'>
              <PostList />
            </Row>
            <Row className='justify-content-center'>
              <Button />
            </Row>
            <Row>
              <SiginIn />
            </Row>
          </Container>
};

export default Main;