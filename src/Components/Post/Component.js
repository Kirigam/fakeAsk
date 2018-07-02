import React from 'react';
import {Col, Jumbotron } from 'reactstrap';

const Post = ({post}) => {
    return <Col style={{ marginTop: '20px'}}>
                <Jumbotron>
                    <h1 className="display-6">{post.title}</h1>
                    <p className="lead">{post.body}</p> 
                </Jumbotron>
                <hr className="my-2" />
            </Col>
};

export default Post;