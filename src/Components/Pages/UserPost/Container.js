import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import Component from './Component';
import postsActions from '../../../modules/posts/actions';
import commentsActions from '../../../modules/comments/actions';
import { Link } from 'react-router-dom';
import Loader from '../../Loader/Component';
import NotFound from '../../NotFound/Component';


const getPostId = () => { 
    const postId = document.location.pathname.split('/').reverse();
    return (postId.length > 3) ? false : postId[0];
}

const checkObject = (obj) => {
    for (let key in obj) {
        return false;
      }
      return true;
};

const mapStateToProps = state => ({
            notFound: (checkObject(state.posts.items) && (state.posts.items.length === undefined)) ? true : false,
            isFetching: state.posts.isFetching,
            usersPost: state.posts.items
});

const enhancer = compose(
    connect(mapStateToProps),
    lifecycle({
        componentDidMount() {
            const { dispatch } = this.props;
            const postId = getPostId();

            if(this.props.usersPost.length === 0) {
                
                dispatch(postsActions.fetchingPosts(postId));
                return dispatch(commentsActions.fetchingComments(postId));
            } else
                return dispatch(commentsActions.fetchingComments(postId));
        }
    }),
    branch(
        ({notFound}) => notFound,
        renderComponent(NotFound)
    ),
    branch(
        ({isFetching}) => isFetching,
        renderComponent(Loader)
    )
);

export default enhancer(Component);