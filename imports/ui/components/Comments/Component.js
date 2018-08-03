import React from 'react';
import { Col, Media } from 'reactstrap';

const Comments = ({commentsList}) => {
    return <Col><Media list>
            {commentsList.map(item => <Media key={item.id} className='mt-2'>
                    <Media>
                        <Media style={{width: '56px', heigth: '56px'}} src='/images/user.jpg' alt='user' />
                    </Media> 
                    <Media body className='ml-2'>
                        <Media heading>{item.name}</Media>
                        <Media>{item.body}</Media>
                    </Media>
                </Media>
            )}
        </Media></Col>
};

export default Comments;