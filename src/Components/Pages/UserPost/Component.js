import React from 'react';
import Post from '../../Post/Container';
import Comments from '../../Comments/Container';

const UserPost = ({post, comments}) => {
    
    return <React.Fragment>
               <Post /> 
               <h3>Comments:</h3>
               <Comments />
           </React.Fragment>
};

export default UserPost;