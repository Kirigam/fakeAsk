import React from 'react';
import Post from '../../Post/Container';
import Comments from '../../Comments/Container';
import { Container, Row, Col } from 'reactstrap';

const UserPost = () => {
    
    return <Container>
                <Row>
                    <Post /> 
                </Row>
                <Row>
                    <Col>
                        <h3>Comments:</h3>
                    </Col>
                </Row>
                <Row>
                    <Comments />
                </Row>
           </Container>
};

export default UserPost;