import actionTypes from "./types";

const receivePosts = res => ({
    type: actionTypes.RECEIVE_POSTS,
    posts: [].slice.call(res)
});

const increaseCount = action => ({
    type: actionTypes.INCREASE_COUNT_POSTS,
});

const searchPost = value => ({
    type: actionTypes.SEARCH_POST,
    value
});

const startFetchingPosts = state => dispatch => {
    dispatch({ type: actionTypes.REQUEST_POSTS });

    return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(res => dispatch(receivePosts(res)));
}

export default {
    startFetchingPosts,
    increaseCount,
    searchPost
};