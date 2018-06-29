import React from 'react';

const Post = ({post}) => {
    return <React.Fragment>
            <h1>{post.title}</h1>
               <p>{post.body}</p> 
            </React.Fragment>
};

export default Post;