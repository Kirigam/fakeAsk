import React from 'react';
import {Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

const Post = ({post, user}) => {
    return <Col style={{ marginTop: '20px'}}>
                <Jumbotron>
                    <h1 className="display-6">{post.title}</h1>
                    <p className="lead">{post.body}</p> 
                    <p><strong>By:</strong> <Link to={{ pathname: '/user/' + user.id}}>{user.name}</Link></p>
                </Jumbotron>
                <hr className="my-2" />
            </Col>
};

export default Post;