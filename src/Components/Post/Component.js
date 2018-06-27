import React from 'react';

const Post = ({userPost}) => {
    return <React.Fragment>
            <h1>{userPost.title}</h1>
               <p>{userPost.body}</p> 
            </React.Fragment>
};

export default Post;