import React from 'react';

const Comments = ({commentsList}) => {
    console.log(commentsList);
    
    return <ul>
            {commentsList.map(item => <li key={item.id}>{item.body}</li>)}
            </ul>
};

export default Comments;