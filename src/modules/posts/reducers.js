import actionTypes from "./types";

const posts = (state = {
        isFetching: false,
        count: 10,
        items: [],
        search: ''
  }, action) => {
    switch(action.type) {
        case actionTypes.REQUEST_POSTS: 
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                items: action.value
            }
        case actionTypes.INCREASE_COUNT_POSTS: {
            if(state.count >= state.items.length)
                return state
            else return {
                ...state,
                count: state.count+10
            }
        }
        case actionTypes.SEARCH_POST: 
            return {
                ...state,
                search: action.value
            }
        default:
            return state
    }
};

export default posts;