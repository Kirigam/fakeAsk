import React from 'react';

const PostsList = ({posts}) => {
    return <ol>
            {
                (posts.length > 0) ?
                    posts.map(item => <li key={item.id} id={item.id}>{item.title}</li>) :
                    'Not found'  
            } 
           </ol>
};

export default PostsList;