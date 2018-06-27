import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import Component from './Component';
import postsActions from '../../../modules/posts/actions';
import commentsActions from '../../../modules/comments/actions';
import { Link } from 'react-router-dom';

const getPostId = () => document.location.pathname.split('/').reverse()[0];

const mapStateToProps = state => {

    const postId = +getPostId();
    let userPost = {};
    
    if(state.posts.items.length > 0) {
       state.posts.items.forEach(item => {
            if(item.id === postId) return userPost = item;
        });
        
        return {
            post: (state.posts.items.id !== undefined) ? state.posts.items : userPost,
            comments: state.comments.items
        }
    } else {
        return {
            post: (state.posts.items.id === undefined) ? userPost : state.posts.items,
            comments: state.comments.items
        }
    }    
};

const enhancer = compose(
    connect(mapStateToProps),
    lifecycle({
        componentDidMount() {
            const { dispatch } = this.props;
            const postId = getPostId();

            if(this.props.post.id === undefined) {
                dispatch(postsActions.fetchingPosts(postId));
                return dispatch(commentsActions.fetchingComments(postId));
            } else
                return dispatch(commentsActions.fetchingComments(postId));
        }
    })
);
export default enhancer(Component);