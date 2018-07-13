import actionTypes from './types';

const user = (state={
        info: {},
        isFetching: false
    }, action) => {
    switch(action.type) {
        case actionTypes.REQUEST_USER: 
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.RECEIVE_USER:
            return {
                isFetching: false,
                info: action.value
            }
        default:
            return state
    }
}

export default user;