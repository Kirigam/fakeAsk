import React from 'react';
import Post from '../../Post/Component';
import Comments from '../../Comments/Component';

const UserPost = ({post, comments}) => {
    
    return <React.Fragment>
               <Post userPost={post} /> 
               <h3>Comments:</h3>
               <Comments commentsList={comments} />
           </React.Fragment>
};

export default UserPost;