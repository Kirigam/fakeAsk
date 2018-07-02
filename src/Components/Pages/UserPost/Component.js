import React from 'react';
import Post from '../../Post/Container';
import Comments from '../../Comments/Container';
import { Container } from 'reactstrap';

const UserPost = ({post, comments}) => {
    
    return <Container>
               <Post /> 
               <h3>Comments:</h3>
               <Comments />
           </Container>
};

export default UserPost;