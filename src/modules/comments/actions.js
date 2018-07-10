import actionTypes from "./types";

const receiveComments = value => ({
    type: actionTypes.RECEIVE_COMMENTS,
    value
});


const fetchingComments = commentToPost => dispatch => {
    dispatch({ type: actionTypes.REQUEST_COMMENTS });
    const API = 'https://jsonplaceholder.typicode.com/posts/' + commentToPost + '/comments';

    return fetch(API)
            .then(res => res.json())
            .then(res => dispatch(receiveComments(res)));
}

export default fetchingComments;