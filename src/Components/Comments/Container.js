import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderComponent, lifecycle } from 'recompose';
import commentsActions from '../../modules/comments/actions';
import Component from './Component';
import Loader from '../Loader/Component';

const mapStateToProps = state => ({
    commentsList: state.comments.items,
    isFetching: state.comments.isFetching
});

const getPostId = () => { 
    const postId = document.location.pathname.split('/').reverse();
    return (postId.length > 3) ? false : postId[0];
}

const enhancer = compose(
    connect(mapStateToProps),
    lifecycle({
        componentDidMount() {
            const { dispatch, commentsList } = this.props;
            const postId = getPostId();

            if((commentsList.postId === undefined) || (commentsList.postId !== postId)) {
                return dispatch(commentsActions(postId));
            }
        }
    }),
    branch(
        ({isFetching}) => isFetching,
        renderComponent(Loader)
    )
);

export default enhancer(Component);