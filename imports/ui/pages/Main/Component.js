import React from 'react';
import PostList from '../../components/PostList/Container';
import Button from '../../components/Button/Container';
import AuthorizationModalForm from '../../components/AuthorizationModalForm/Container';
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
              <AuthorizationModalForm />
            </Row>
          </Container>
};

export default Main;
