import actionTypes from './types';

const comments = (state = {
    items: [],
    isFetching: false
}, action) => {
    switch(action.type) {
        case actionTypes.REQUEST_COMMENTS:
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.RECEIVE_COMMENTS:
            return {
                ...state,
                isFetching: false,
                items: action.value
            }
        default: 
            return state
    }
};

export default comments;