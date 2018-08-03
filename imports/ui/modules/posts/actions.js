import actionTypes from "./types";

const receivePosts = value => ({
    type: actionTypes.RECEIVE_POSTS,
    value
});

const increaseCount = action => ({
    type: actionTypes.INCREASE_COUNT_POSTS,
});

const searchPost = value => ({
    type: actionTypes.SEARCH_POST,
    value
});


const fetchingPosts = postId => dispatch => {
    dispatch({ type: actionTypes.REQUEST_POSTS });
    const API = (postId !== undefined) ? ('https://jsonplaceholder.typicode.com/posts/' + postId) :
                                         'https://jsonplaceholder.typicode.com/posts';

    return fetch(API)
            .then(res => res.json())
            .then(res => dispatch(receivePosts(res)));
}

export default {
    fetchingPosts,
    increaseCount,
    searchPost
};