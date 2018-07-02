import React from 'react';
import {ListGroup, ListGroupItem, Col } from 'reactstrap';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const PostGroup = styled(ListGroup)`
    
    .list-group-item:hover {
        background-color: #807eeb;
        color: #fff;
        text-decoration: none
    }
`;

const PostsList = ({posts}) => {
    return <Col lg='8'> 
                {(posts.length > 0) ? 
                    <PostGroup style={{ margin: '25px 0 25px 0'}}>
                        {posts.map(item => 
                                <NavLink className='list-group-item' to={{pathname: '/posts/' + item.id }} key={item.id}>
                                {item.title}</NavLink>)}     
                    </PostGroup> :
                        <p style={{textAlign: 'center'}}>Not found</p>} 
            </Col> 
};

export default PostsList;