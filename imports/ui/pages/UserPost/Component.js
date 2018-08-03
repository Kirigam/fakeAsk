import React from 'react';
import Post from '../../components/Post/Container';
import Comments from '../../components/Comments/Container';
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