import React from 'react';
import { connect } from 'react-redux';
import Component from './Component';

const getPostId = () => document.location.pathname.split('/').reverse()[0];

const mapStateToProps = state => {

    const postId = +getPostId();
    let userPost = {};
    
    if(state.posts.items.length > 0) {
       state.posts.items.forEach(item => {
            if(item.id === postId) return userPost = item;
        });
        
        return {
            post: (state.posts.items.id !== undefined) ? state.posts.items : userPost
        }
    } else {
        return {
            post: (state.posts.items.id === undefined) ? userPost : state.posts.items
        }
    }    
};

export default connect(mapStateToProps)(Component);