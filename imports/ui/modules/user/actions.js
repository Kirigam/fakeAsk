import actionTypes from './types';

const reciveUser = value => ({
    type: actionTypes.RECEIVE_USER,
    value
});

const fetchingUser = userId => dispatch => {
    if(userId !== undefined) {
        dispatch({ type: actionTypes.REQUEST_USER });
        const API = 'https://jsonplaceholder.typicode.com/users/' + userId;

        return fetch(API)
            .then(res => res.json())
            .then(res => dispatch(reciveUser(res)));
    }
}

export default fetchingUser;