import React from 'react';
import User from '../../User/Container';
import { Container, Row } from 'reactstrap';
import UserPostsList from '../../UserPostsList/Container';

const UserInfo = () => {
    return <Container>
                <User />
                <Row className='justify-content-center mt-2'>
                    <h3>User posts:</h3>
                </Row>
                <Row className='justify-content-center'>
                    <UserPostsList />
                </Row>
            </Container>
};

export default UserInfo;